require('dotenv').config();
const express = require('express');
const User = require('./models/users').User;
const Group = require('./models/groups');
const Account = require('./models/accounts');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./auth');


router.post('/register', async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        // check if email and password are provided
        if (!email || !password) {
            console.log("email or pass are missing" + email + password);
            return res.status(400).json({ error: 'Email and password are required' });
        }
        // check if user already exists
        const count = await User.count({ where: { email } });
        if (count > 0) {
    return res.status(409).json({ error: 'User already exists' });
}
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log ("ivykde 26 eilute");
        // create a new user object
        const newUser = { full_name: fullName, email, password: hashedPassword };
        console.log(newUser)
        console.log ("ivykde 28 eilute");
        // insert the user into the database
        const createdUser = await User.create(newUser, { fields: ['full_name', 'email', 'password'] });
        console.log ("ivykde 31 eilute");
        // create and sign a JSON web token
        const token = jwt.sign({ id: createdUser.id }, process.env.SECRET_KEY);
        console.log ("ivykde 34 eilute");
        // return the token in the response
        return res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log (req.body);
    }
});

router.post('/loginUser', async (req, res) => {
    const { email, password } = req.body;
    // check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }
    // check if user exists
    const count = await User.count({ where: { email } });
    if (count === 0) {
        return res.status(404).json({ error: 'User not found' });
}
    // compare provided password with hashed password in the database
    const user = await User.findOne({ where: { email } });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    // create and sign a JSON web token only if user exists
    if (user) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        // return the token in the response
        return res.status(201).json({ token });
    }
});

router.get('/users', auth, async (req, res) => {
    try {
        const user = await user.findAll();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// get a specific user by id
router.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// update a specific user by id
router.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.update(req.body);
        res.json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// delete a specific user by id
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
        }
        });
        
        module.exports = router;


        // create a new group
        router.post('/groups', auth, async (req, res) => {
            try {
                const { group_name } = req.body;
                const newGroup = { name: group_name };
                const createdGroup = await Group.create(newGroup);
                res.json({ createdGroup });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
        
        // join an existing group
        router.post('/groups/:id/join', auth, async (req, res) => {
            try {
                const { id } = req.params;
                const group = await Group.findByPk(id);
                if (!group) {
                    return res.status(404).json({ message: 'Group not found' });
                }
                // add the user to the group's members array
                group.members.push(req.user.id);
                await group.save();
                res.json({ group });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
        
        
//delete a group

router.delete('/groups/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const group = await Group.findByPk(id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found.' });
        }
        await group.destroy();
        res.json({ message: 'Group deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


//retrieve all groups

router.get('/getAllGroups', auth, async (req, res) => {
    try {
        const groups = await Group.findAll();
        res.json({ groups });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// retrieve special group by id

router.get('/groups/:id', auth, async (req, res) => {
    try {
        const { id } = req.params;
        const group = await Group.findByPk(id);
        if (!group) {
            return res.status(404).json({ message: 'Group not found' });
        }
        res.json({ group });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get accounts
router.get('/getAccounts', auth, async (req, res) => {
    try {
        const account = await Account.findAll();
        res.json({ account });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// create a new accounts
        router.post('/addAccounts', auth, async (req, res) => {
            try {
                const { user, groupId } = req.body;
                const newAccount = { group_id: groupId, user_id: user };
                const createdAccount = await Account.create(newAccount);
                res.json({ createdAccount });
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });


        
          
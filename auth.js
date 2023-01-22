const jwt = require('jsonwebtoken');

// Middleware function to check for a valid JSON web token
function auth(req, res, next) {
    // Get the token from the header of the request
    const token = req.header('auth-token');

    // Check if there is no token
    if (!token) return res.status(401).json({ message: 'Access Denied' });

    try {
        // Verify the token
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    } catch (error) {
        // If the token is invalid
        res.status(400).json({ message: 'Invalid Token' });
    }
}

module.exports = auth;

 // Get references to DOM elements
 const groupNameInput = document.querySelector('#group_name');
 const createGroupForm = document.querySelector('form');
 const groupsTable = document.querySelector('table');

 // Listen for submit event on form
 createGroupForm.addEventListener('submit', (event) => {
     event.preventDefault();
     createGroup(groupNameInput.value);
     location.reload();
 });

document.addEventListener("DOMContentLoaded", listGroup());
 // Function to create a new group
 async function createGroup(groupName) {
     try {
         // Make a POST request to the server to create the group
         const response = await fetch('/groups', {
             method: 'POST',
             body: JSON.stringify({ group_name: groupName }),
             headers: {
            'Content-Type': 'application/json',
            "auth-token": window.localStorage.getItem('token') }
         });

         // Parse the response as JSON
         const newGroup = await response.json();

         // Add the new group to the table
         updateTable(newGroup);
         // Clear the input field
         groupNameInput.value = '';
     } catch (error) {
         console.error(error);
     }
}
 
async function listGroup() {
    try {
        const response = await fetch('/getAllGroups', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": window.localStorage.getItem('token')
            }
        });
        const getGroupList = await response.json();
        updateTable(getGroupList);
    } catch (error) {
    console.error(error);
}
}

 // Function to add a group to the table
function updateTable(group) {
    
    group.groups.map(x => {
    const row = document.createElement('tr');
        
     // Create cells for the row
     const nameCell = document.createElement('td');
     nameCell.textContent = x.name;
     const actionsCell = document.createElement('td')

     // Create edit and delete buttons for the actions cell 
    //  const editButton = document.createElement('button');
    //  editButton.textContent = 'Edit';
    //  const deleteButton = document.createElement('button');
    //  deleteButton.textContent = 'Delete';

     // Add the buttons to the actions cell
    //  actionsCell.appendChild(editButton);
    //  actionsCell.appendChild(deleteButton);

     // Add the cells to the row
     row.appendChild(nameCell);
    // row.appendChild(actionsCell);

     // Add the row to the table
     groupsTable.appendChild(row);
    })
 }

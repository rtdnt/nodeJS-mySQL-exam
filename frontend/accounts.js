const addAccountButton = document.getElementById('add-account-button');
const addAccountForm = document.getElementById('add-account-form');
const cancelAddAccountButton = document.getElementById('cancel-add-account');
const groupSelect = document.getElementById('group');
const userInput = document.getElementById('user');
const accountsTable = document.getElementById('accounts-table');

// Show/hide the add account form when the add account button is clicked
addAccountButton.addEventListener('click', () => {
  addAccountForm.style.display = 'block';
});

// Hide the add account form when the cancel button is clicked
cancelAddAccountButton.addEventListener('click', () => {
  addAccountForm.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", listAccounts());
// Send a request to the server to create a new account when the form is submitted
addAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const groupId = groupSelect.value;
  const user = userInput.value;
  // Send a POST request to the server with the group id and balance
  fetch('/addAccounts', {
    method: 'POST',
    body: JSON.stringify({ groupId, user }),
    headers: {
      'Content-Type': 'application/json',
      "auth-token": window.localStorage.getItem('token')
    }
  })
    .then(response => response.json())
    .then((account) => {
      // Add the new account to the table
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${account.groupId}</td>
        <td>${account.user}</td>
        <td>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </td>
      `;
      accountsTable.appendChild(row);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

async function listAccounts() {
    try {
        const response = await fetch('/getAccounts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": window.localStorage.getItem('token')
            }
        });
        const getAccountList = await response.json();
      getAccountList.account.forEach(el => {
        const renderGroups = document.getElementById('group');
        let opt = document.createElement('option');
        opt.value = el.group_id;
        opt.innerHTML = el.group_id;
        renderGroups.appendChild(opt);
       const row = document.createElement('tr');
      row.innerHTML = `
        <td>${el.group_id}</td>
        <td>${el.user_id}</td>
        <td>
          <button class="edit-button">Edit</button>
          <button class="delete-button">Delete</button>
        </td>
      `;
        accountsTable.appendChild(row);
        });
    } catch (error) {
    console.error(error);
}
}


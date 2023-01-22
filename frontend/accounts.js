const addAccountButton = document.getElementById('add-account-button');
const addAccountForm = document.getElementById('add-account-form');
const cancelAddAccountButton = document.getElementById('cancel-add-account');
const groupSelect = document.getElementById('group');
const balanceInput = document.getElementById('balance');
const accountsTable = document.getElementById('accounts-table');

// Show/hide the add account form when the add account button is clicked
addAccountButton.addEventListener('click', () => {
  addAccountForm.style.display = 'block';
});

// Hide the add account form when the cancel button is clicked
cancelAddAccountButton.addEventListener('click', () => {
  addAccountForm.style.display = 'none';
});

// Send a request to the server to create a new account when the form is submitted
addAccountForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const groupId = groupSelect.value;
  const balance = balanceInput.value;
  // Send a POST request to the server with the group id and balance
  fetch('/accounts', {
    method: 'POST',
    body: JSON.stringify({ groupId, balance }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((account) => {
      // Add the new account to the table
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${account.groupId}</td>
        <td>${account.balance}</td>
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


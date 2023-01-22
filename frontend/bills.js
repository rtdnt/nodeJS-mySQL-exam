// Fetch all bills from the server and display them in the table
async function fetchBills() {
    try {
        const response = await fetch('/bills');
        const bills = await response.json();

        const billsTable = document.querySelector('#bills-table');
        billsTable.innerHTML = '';

        bills.forEach(bill => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${bill.id}</td>
                <td>${bill.group_id}</td>
                <td>${bill.amount}</td>
                <td>${bill.description}</td>
                <td>
                    <button onclick="editBill(${bill.id})">Edit</button>
                    <button onclick="deleteBill(${bill.id})">Delete</button>
                </td>
            `;
            billsTable.appendChild(row);
        });
    } catch (error) {
        console.error(error);
    }
}
fetchBills();

// Add a new bill to the database
const addBillForm = document.querySelector('#add-bill-form');
addBillForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const group_id = document.querySelector('#group_id').value;
        const amount = document.querySelector('#amount').value;
        const description = document.querySelector('#description').value;

        const data = { group_id, amount, description };

        await fetch('/bills', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        // Clear the form and re-fetch the bills to display the new bill
        addBillForm.reset();
        fetchBills();
    } catch (error) {
        console.error(error);
    }
});

// Edit a bill
async function editBill(id) {
    // code to handle editing a bill
}

// Delete a bill
async function deleteBill(id) {
    try {
        await fetch(`/bills/${id}`, { method: 'DELETE' });
        fetchBills();
    } catch (error) {
        console.error(error);
    }
}
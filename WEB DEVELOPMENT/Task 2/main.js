document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');

    // Load expenses from local storage on page load
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // Function to display expenses
    function displayExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(function(expense, index) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${expense.name}</span>
                <span>$${expense.amount}</span>
                <button class="editBtn" data-index="${index}">Edit</button>
                <button class="deleteBtn" data-index="${index}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }

    // Function to add expense
    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const expenseName = document.getElementById('expenseName').value;
        const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);

        if (expenseName && !isNaN(expenseAmount)) {
            const newExpense = {
                name: expenseName,
                amount: expenseAmount
            };
            expenses.push(newExpense);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses();
            expenseForm.reset();
        } else {
            alert('Please enter valid expense details.');
        }
    });

    // Function to delete expense
    expenseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('deleteBtn')) {
            const index = event.target.getAttribute('data-index');
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            displayExpenses();
        }
    });

    // Function to edit expense (optional)
    expenseList.addEventListener('click', function(event) {
        if (event.target.classList.contains('editBtn')) {
            const index = event.target.getAttribute('data-index');
            const newName = prompt('Enter new expense name:');
            const newAmount = parseFloat(prompt('Enter new amount:'));

            if (newName && !isNaN(newAmount)) {
                expenses[index].name = newName;
                expenses[index].amount = newAmount;
                localStorage.setItem('expenses', JSON.stringify(expenses));
                displayExpenses();
            } else {
                alert('Please enter valid expense details.');
            }
        }
    });

    // Display initial expenses on page load
    displayExpenses();
});
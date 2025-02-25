document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get form values
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    // Validate input
    if (!date || !category || !description || isNaN(amount)) {
      alert('Please fill in all fields correctly.');
      return;
    }
  
    // Add expense to the table
    addExpenseToTable(date, category, description, amount);
  
    // Update total expenses
    updateTotalExpenses(amount);
  
    // Save expense to localStorage
    saveExpense(date, category, description, amount);
  
    // Clear form fields
    document.getElementById('expenseForm').reset();
  });
  
  function addExpenseToTable(date, category, description, amount) {
    const expenseList = document.getElementById('expenseList');
  
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${date}</td>
      <td>${category}</td>
      <td>${description}</td>
      <td>₹${amount.toFixed(2)}</td>
      <td><button class="delete-btn" onclick="deleteExpense(this, '${date}', '${category}', '${description}', ${amount})">Delete</button></td>
    `;
  
    expenseList.appendChild(row);
  }
  
  function updateTotalExpenses(amount) {
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = parseFloat(totalAmountElement.textContent);
    totalAmount += amount;
    totalAmountElement.textContent = totalAmount.toFixed(2);
  }
  
  function deleteExpense(button, date, category, description, amount) {
    const row = button.closest('tr');
    row.remove();
  
    // Update total expenses
    const totalAmountElement = document.getElementById('totalAmount');
    let totalAmount = parseFloat(totalAmountElement.textContent);
    totalAmount -= amount;
    totalAmountElement.textContent = totalAmount.toFixed(2);
  
    // Remove expense from localStorage
    removeExpense(date, category, description, amount);
  }

  function saveExpense(date, category, description, amount) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push({ date, category, description, amount });
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  function loadExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.forEach(expense => {
      addExpenseToTable(expense.date, expense.category, expense.description, expense.amount);
      updateTotalExpenses(expense.amount);
    });
  }

  function removeExpense(date, category, description, amount) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses = expenses.filter(expense => 
      expense.date !== date || 
      expense.category !== category || 
      expense.description !== description || 
      expense.amount !== amount
    );
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }

  // Load expenses when the page loads
  window.onload = loadExpenses;
let balance = 0;

function deposit() {
  const customerId = document.getElementById("customerId").value.trim();
  const customerName = document.getElementById("customerName").value.trim();
  const accountNo = document.getElementById("accountNo").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (!customerId || !customerName || !accountNo || isNaN(amount) || amount <= 0) {
    showMessage("Please enter all details correctly.", true);
    return;
  }

  balance += amount;
  updateUI(customerName);
  showMessage(`₹${amount} deposited successfully.`);
}

function withdraw() {
  const customerId = document.getElementById("customerId").value.trim();
  const customerName = document.getElementById("customerName").value.trim();
  const accountNo = document.getElementById("accountNo").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (!customerId || !customerName || !accountNo || isNaN(amount) || amount <= 0) {
    showMessage("Please enter all details correctly.", true);
    return;
  }

  if (amount > balance) {
    showMessage("Insufficient balance.", true);
    return;
  }

  balance -= amount;
  updateUI(customerName);
  showMessage(`₹${amount} withdrawn successfully.`);
}

function updateUI(name) {
  document.getElementById("balance").innerText = balance.toFixed(2);
  document.getElementById("welcome").innerText = `Welcome, ${name}`;
}

function showMessage(msg, isError = false) {
  const messageElement = document.getElementById("message");
  messageElement.innerText = msg;
  messageElement.style.color = isError ? "red" : "green";
}

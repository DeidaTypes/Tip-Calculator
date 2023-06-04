
// Get the input fields
const billInput = document.getElementById('billSelect');
const tipInput = document.getElementById('tipSelect');
const pplInput = document.getElementById('pplMany');
const clearBtn = document.getElementById('clearMe');

// Get the output fields
const totalTipOutput = document.getElementById('totalTip');
const totalBillOutput = document.getElementById('totalBill');
const totalPerOutput = document.getElementById('totalPer');

// Calculate the tip and total bill
function calculateTip() {
  const bill = parseFloat(billInput.value);
  const tip = parseFloat(tipInput.value);
  const ppl = parseFloat(pplInput.value);

  if (isNaN(bill) || isNaN(tip) || isNaN(ppl)) {
    alert('Please enter valid numbers');
    return;
  }

  const tipAmount = bill * (tip / 100);
  const totalBill = bill + tipAmount;
  const totalPer = totalBill / ppl;

  // Display the results
  totalTipOutput.innerHTML = `<h2>Total Tip: ${tipAmount.toFixed(2)}</h2>`;
  totalBillOutput.innerHTML = `<h2>Total Bill: ${totalBill.toFixed(2)}</h2>`;
  totalPerOutput.innerHTML = `<h2>Total Per Person: ${totalPer.toFixed(2)}</h2>`;
}

function clearFields(){
    billInput.value = '';
    tipInput.value = '';
    pplInput.value = '';
    totalTipOutput.innerHTML = '<h2>Total Tip:</h2>';
    totalBillOutput.innerHTML = '<h2>Total Bill:</h2>';
    totalPerOutput.innerHTML = '<h2>Total Tip:</h2>';
}

clearBtn.addEventListener('click', clearFields);

// Attach the calculateTip function to the button click event
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', calculateTip);




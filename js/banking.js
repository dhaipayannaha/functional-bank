
function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  if(isNaN(inputAmountText)){
    alert("Amount shold be a number!!");
    return;
  }
  const amountValue = parseFloat(inputAmountText);
  
  inputField.value = '';

  return amountValue;
}

function updateTotalField(totalFieldId, amount){
  const totalElement =  document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total'); 
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd,){
  const balanceTotal = document.getElementById('balance-total');

  const previousBalanceTotal = getCurrentBalance();
  if(isAdd == true){
    balanceTotal.innerText = previousBalanceTotal + amount
  }
  else{
    balanceTotal.innerText = previousBalanceTotal - amount
  }
}



              //  ////// 2nd  //// ///
// deposit input

document.getElementById('deposit-button').addEventListener('click', function (){

  const depositAmount = getInputValue('deposit-Input');
  if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
  updateBalance(depositAmount, true);
  }

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
  
const withdrawAmount = getInputValue('Widthdrow-input');
const currentBalance = getCurrentBalance();
if(withdrawAmount > 0 && withdrawAmount < currentBalance){
  updateTotalField('Withdraw-total', withdrawAmount);
updateBalance(withdrawAmount, false);
}

if(withdrawAmount > currentBalance){
  console.log('can not');
}

});




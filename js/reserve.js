function getInputValue(inputId){
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
    //  clear input field
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
 /*  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText); */ 

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


//  get and update deposit total  //
  /* const depositTotal =  document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousDepositTotal + depositAmount; */
  

  // update balance

  /* const balanceTotal = document.getElementById('balance-total'); 
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount */
  const depositAmount = getInputValue('deposit-Input');
  if(depositAmount > 0){
    updateTotalField('deposit-total', depositAmount);
  updateBalance(depositAmount, true);
  }

});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
/* const withdrawInput = document.getElementById('Widthdrow-input');
const withdrawAmountText = withdrawInput.value;
const withdrawAmount = parseFloat(withdrawAmountText); */

// get and update withdraw total//
/* const withdrawTotal = document.getElementById('Withdraw-total');
const previousWithdrawTotalText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); 
withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

/* const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
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
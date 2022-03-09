// Banking Transaction

function getInputValue(inputId){
    const depositeInput = document.getElementById(inputId);
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);
    depositeInput.value = "";
    return newDepositeAmount;
}

function updateTotalField(totalFieldId,newDepositeAmount){
    const depositeTotal = document.getElementById(totalFieldId);
    const priviousDepositeText = depositeTotal.innerText;
    const priviousDepositeAmount = parseFloat(priviousDepositeText);
    depositeTotal.innerText = priviousDepositeAmount + newDepositeAmount;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-amount');
    const balanceTotalText = balanceTotal.innerText;
    const priviousBalanceTotal = parseFloat(balanceTotalText);
    return priviousBalanceTotal;
}

function updateBalance(newDepositeAmount, isAdd){
    const balanceTotal = document.getElementById('balance-amount');
    // const balanceTotalText = balanceTotal.innerText;
    // const priviousBalanceTotal = parseFloat(balanceTotalText);
    const priviousBalanceTotal = getCurrentBalance();
    if(isAdd == true){
        balanceTotal.innerText = priviousBalanceTotal + newDepositeAmount;
    }
    else{
        balanceTotal.innerText = priviousBalanceTotal - newDepositeAmount;
    }
}

document.getElementById('deposite-btn').addEventListener('click', function(){
    // const depositeInput = document.getElementById('deposite-input');
    // const newDepositeText = depositeInput.value;
    // const newDepositeAmount = parseFloat(newDepositeText);
    const newDepositeAmount = getInputValue('deposite-input')
    if(newDepositeAmount > 0 ){
        updateTotalField('deposite-total',newDepositeAmount);
        updateBalance(newDepositeAmount, true);
    }
    
    // const depositeTotal = document.getElementById('deposite-total');
    // const priviousDepositeText = depositeTotal.innerText;
    // const priviousDepositeAmount = parseFloat(priviousDepositeText);
    
    // depositeTotal.innerText = priviousDepositeAmount + newDepositeAmount;
    // depositeTotal.innerText = newDepositeTotal;


    // const balanceTotal = document.getElementById('balance-amount');
    // const balanceTotalText = balanceTotal.innerText;
    // const priviousBalanceTotal = parseFloat(balanceTotalText);
    
    // balanceTotal.innerText = priviousBalanceTotal + newDepositeAmount;

    // balanceTotal.innerText = newBalanceTotal;

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const newWithdrawText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(newWithdrawText);
    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if( newWithdrawAmount  > 0 && newWithdrawAmount < currentBalance){
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if( newWithdrawAmount > currentBalance){
        alert("You cannot withdraw more than that you have in your account");
    }
    



    
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const priviousWithdrawText = withdrawTotal.innerText;
    // const priviousWithdrawAmount = parseFloat(priviousWithdrawText);
    
    // withdrawTotal.innerText = priviousWithdrawAmount + newWithdrawAmount;


    // withdrawTotal.innerText = newWithdrawTotal;

    // const balanceTotal = document.getElementById('balance-amount');
    // const balanceTotalText = balanceTotal.innerText;
    // const priviousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = priviousBalanceTotal - newWithdrawAmount;
    // balanceTotal.innerText = newBalanceTotal;

})
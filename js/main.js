// get all input 
function getInputValue(inputId){
    const inputText = document.getElementById(inputId + '-input');
    const inputValue = inputText.value;
    const inputNumber = parseFloat(inputValue);
   
    let massage = errorMassage(inputValue,inputId, inputNumber, inputText);
    if(massage == true){
        return inputNumber;
    }
    else{
        return -1;
    }
    
}

// calculate function income and cost 
function calculateIncomeAndCost(income, food, rend, clothes){
    const totalCostShow = document.getElementById('total-cost');
    const balanceShow = document.getElementById('balance');
    const totalCost = food + rend + clothes;
    const balance = income - totalCost;
    if(income < totalCost){
        const incomeError = document.getElementById('incomeError');
        incomeError.innerText = 'Please increase your income';
    }
    else{
    totalCostShow.innerText = totalCost;
    balanceShow.innerText = balance;
    incomeError.innerText = '';
    }
    
    return balance;
}



//error massage function 
function errorMassage(inputValue, inputId, inputNumber, inputText){
    const targetEorrorTag = document.getElementById(inputId + '-input-error');
    if(isNaN(inputValue) || inputText.value == ''){
        targetEorrorTag.innerText = 'Please input a number !!'; 
    }
    else if(inputNumber < 0 ){
        targetEorrorTag.innerText = 'Please input a number zero or greater then zero !!';
    }
    else{
        targetEorrorTag.innerText = '';
        return true;
    }
   
}

// saving calculation
function savingCalculation(balanceAmount, income, saving){
    const notEnoughMoney = document.getElementById('not-enough-balance');
    const savingAmountShow = document.getElementById('saving-amount');
    const remainingAmountShow = document.getElementById('remaining-amount');
    const savingAmount = (saving/100) * income;
    const remainingBalance = balanceAmount - savingAmount;
    if(savingAmount > balanceAmount){
        
        notEnoughMoney.innerText = 'There is not enough money to saving.';
        savingAmountShow.innerText = savingAmount;
        savingAmountShow.style.backgroundColor = '#FFC107';
        savingAmountShow.style.fontSize = '2rem';
        remainingAmountShow.innerText = '00';
    }
    else{
        savingAmountShow.innerText = savingAmount;
        remainingAmountShow.innerText = remainingBalance;
        savingAmountShow.style.backgroundColor = '#F8F8F8';
        savingAmountShow.style.fontSize = '1.25rem';
        notEnoughMoney.innerText = '';
        
    }
}
// income and cost Calculate

document.getElementById('income_cost-button').addEventListener('click', function(){
    const incomeNumber = getInputValue ('income');
    const foodNumber = getInputValue ('food');
    const rentNumber = getInputValue ('rent');
    const clothesNumber = getInputValue ('clothes');

    if(incomeNumber != -1 && foodNumber != -1 && rentNumber != -1 && clothesNumber != -1){
        calculateIncomeAndCost(incomeNumber, foodNumber, rentNumber, clothesNumber);
    }
    
});

// saving calculation

document.getElementById('saving-button').addEventListener('click', function(){
    const balance = document.getElementById('balance').innerText;
    const balanceAmount = parseFloat(balance);
    const incomeNumber = getInputValue ('income');
    const savingNumber = getInputValue ('saving');

    if(balanceAmount != -1 && incomeNumber != -1 && savingNumber != -1 ){
        savingCalculation(balanceAmount,incomeNumber, savingNumber);
    }
    
    
});


function checkNumberOfPeople(value){
    let errorInput = document.querySelector(".js-error-input"); 
    const errorPara = document.querySelector(".js-error-para")
    let regex = /\b0\b/;
    if(regex.test(value)){
        errorPara.style.visibility = "visible";
        errorInput.style.outline = "2px solid red"
    }else {
        errorPara.style.visibility = "hidden";
        errorInput.style.outline = "2px solid var(--strong-cyan)"
    }
}

function removeCheckedState() {
    let radioInputs = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < radioInputs.length; i++) {
      radioInputs[i].checked = false;
    }
}

function removeCustomAmount(){
    let customAmount = document.querySelector(".custom-amount");
    customAmount.value = "";
}

function calcTipAmountPerPerson(value){
    let billAmount = document.querySelector(".js-bill-amount");
    let peopleAmount = document.querySelector(".js-error-input");
    let customAmount = document.querySelector(".custom-amount");
    let outputTipPerPerson = document.querySelector(".js-tip-amount");
    let outputTotalPerPerson = document.querySelector(".js-total-amount");
    if(billAmount.value !== "" && peopleAmount.value !== "0" && peopleAmount.value !== "" && value !== peopleAmount.value){
        let calcTips;
        if(customAmount.value === ""){
            calcTips = calcOutputTipPerPerson(billAmount.value, value, peopleAmount.value);
        }else{
            calcTips = calcOutputTipPerPerson(billAmount.value, customAmount.value, peopleAmount.value)
        }
        outputTipPerPerson.innerHTML = calcTips.toFixed(2);
        outputTotalPerPerson.innerHTML = ((((billAmount.value * 100) / peopleAmount.value) / 100) + calcTips).toFixed(2);
    } 
}

function calcOutputTipPerPerson(billAmount, tipPercentage, peopleAmount){
    return ((((billAmount * 100) * (tipPercentage / 100)) / 100) / peopleAmount);
}

function highlightReset(){
    let outputTipPerPerson = document.querySelector(".js-tip-amount");
    let outputTotalPerPerson = document.querySelector(".js-total-amount");
    let resetButton = document.querySelector(".reset");
    if (outputTipPerPerson.innerHTML !== "$0.00" && outputTotalPerPerson !== "$0.00"){
        resetButton.style.opacity = "1";
    }else{
        resetButton.style.opacity = "0.5";
    }
}

let tipAmountSpan = document.querySelector('.js-tip-amount');
let totalAmountSpan = document.querySelector('.js-total-amount');
tipAmountSpan.addEventListener('DOMSubtreeModified', highlightReset);
totalAmountSpan.addEventListener('DOMSubtreeModified', highlightReset);

function resetBill(){
    let billAmount = document.querySelector(".js-bill-amount");
    let peopleAmount = document.querySelector(".js-error-input");
    let outputTipPerPerson = document.querySelector(".js-tip-amount");
    let outputTotalPerPerson = document.querySelector(".js-total-amount");
    billAmount.value = "";
    removeCheckedState();
    removeCustomAmount();
    peopleAmount.value = "";
    outputTipPerPerson.innerHTML = "$0.00";
    outputTotalPerPerson.innerHTML = "$0.00";
}
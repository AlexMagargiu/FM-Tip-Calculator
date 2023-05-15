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
  
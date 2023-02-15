function updateCaseNumber(isInCrease) {
  const inputField = document.getElementById("input-field-case");
  const inputFieldString = inputField.value;
  const previousCaseNumber = parseInt(inputFieldString);

  let newCaseNumber;
  if (isInCrease === true) {
    newCaseNumber = previousCaseNumber + 1;
  } else {
    newCaseNumber = previousCaseNumber - 1;
  }
  inputField.value = newCaseNumber;
  return newCaseNumber;
}


function updateCaseTotalPrice(newCaseNumber) {
  const totalCasePrice = newCaseNumber * 59;
  const totalCaseElement = document.getElementById("total-case-price");
  totalCaseElement.innerText = totalCasePrice;
}

document.getElementById("btn-plus-case").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCaseTotalPrice(newCaseNumber);
  setElementvalue();

});

document.getElementById("btn-minus-case").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    setElementvalue();
    
  });

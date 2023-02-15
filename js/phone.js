function updatePhoneNumber(phoneNumberz) {
  const phoneNumber = document.getElementById("input-phone-field");
  const phoneNumberString = phoneNumber.value;
  const previousPhoneNumber = parseInt(phoneNumberString);

  let newPhoneNumber;
  if (phoneNumberz === true) {
    newPhoneNumber = previousPhoneNumber + 1;
  } else {
    newPhoneNumber = previousPhoneNumber - 1;
  }
  phoneNumber.value = newPhoneNumber;
  return newPhoneNumber;
}

function updatePriceList(newPhoneNumber){
    const totalPhonePrice = newPhoneNumber * 999;
    const totalDisplay = document.getElementById("phone-total-display");
    totalDisplay.innerText = totalPhonePrice ;

}

function getTextElementValueById(elementId){
  const phoneTotalCost =document.getElementById(elementId);
  const phoneTotalCostString = phoneTotalCost.innerText;
  const phoneTotal =parseInt(phoneTotalCostString);
  return phoneTotal ;
}

function setElementById(id,value){
    const subTotalElement = document.getElementById(id);
    subTotalElement.innerText = value;
}


function setElementvalue(){
  // sub-total option
  const phoneTotal = getTextElementValueById("phone-total-display");
  const caseTotal =  getTextElementValueById('total-case-price');
  const subTotalValue = phoneTotal + caseTotal ;
  setElementById('display-subtotal', subTotalValue)

// tax option
   const taxTotalString = (subTotalValue * 0.01).toFixed(2);
   const taxTotal =parseFloat (taxTotalString) ;
   setElementById('display-tax', taxTotal );

  
// total option
const totalMoney = subTotalValue + taxTotal;
 setElementById('display-total', totalMoney );

}




document.getElementById("btn-plus-phone").addEventListener("click", function () {
  const newPhoneNumber = updatePhoneNumber(true);
   updatePriceList(newPhoneNumber);
   setElementvalue();

  });

document.getElementById("btn-minus-phone").addEventListener("click", function () {
  const newPhoneNumber = updatePhoneNumber(false);
  updatePriceList(newPhoneNumber);
  setElementvalue();


  });

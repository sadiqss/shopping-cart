function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let caseNumber = productInput.value;

    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    productInput.value = caseNumber;
    //update  total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = caseNumber * price;
    //calculate total
    calculateTotal();

}


function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    console.log(productNumber);
    return productNumber;

}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;


}

//phone increase decrease event

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})


//Handle case increase decrease event

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
    /* const productInput = document.getElementById('case-number');
    const caseNumber = productInput.value;
    productInput.value = parseInt(caseNumber) + 1; */

})
document.getElementById('case-minus').addEventListener('click', function () {
    /*  const productInput = document.getElementById('case-number');
     const caseNumber = productInput.value;
     productInput.value = parseInt(caseNumber) - 1;
     */
    updateProductNumber('case', 59, false);

})

function calculateTax(amount) {
    let taxValue = amount * 0.1;
    return taxValue;
    
}

function  convertToUpperCase(text){
    let UpperCase = text.toUpperCase();
    return UpperCase;
}





// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
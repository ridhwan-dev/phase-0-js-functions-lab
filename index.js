
function calculateTax(amount) {
    let taxValue = amount * 0.1;
    return taxValue;
    
}

function  convertToUpperCase(text){
    let UpperCase = text.toUpperCase();
    return UpperCase;
}
function findMaximum (num1,num2){
    if(num1>num2){
        return(num1);

        }
    
    else{
        return(num2);

    }
 
}
function isPalindrome (word){
    return word === word.split("").reverse().join("");



}
function  calculateDiscountedPrice(price, discount) {
    let discountAmount = price * (discount/100)
    let finalPrice = price - discountAmount;
    return finalPrice
}
console.log(calculateTax(1000, 10));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(10,25));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(1000, 20));


    



















// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
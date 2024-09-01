'use strict'
function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = pricePerDroid * quantity;
    return`You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
console.log(makeTransaction(5, 300));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
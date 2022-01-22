/**
 * get quantity
 * if plus button clicked, increment quantity
 * if negative button clicked, substract quantity and check that quantity is not less than 0
 */

// let quantity = document.querySelector('.total-quantity');
let quantity = 1;
let quantityContainer = document.querySelector('.total-quantity');

let positiveBtn = document.getElementById('quantity-up');
positiveBtn.addEventListener('click', function() {
    quantity = quantity + 1;
    quantityContainer.textContent = `Quantity: ${quantity}`;
});

let negativeBtn = document.getElementById('quantity-down');
negativeBtn.addEventListener('click', function(){
    if(quantity > 0) {
        quantity = quantity - 1;
    }
    quantityContainer.textContent = `Quantity: ${quantity}`;
})

const navbarNav = document.querySelector("header nav .links");
const toogleMenuBtn = document.querySelector("header nav .toogle-nav");

toogleMenuBtn.addEventListener("click",()=>{
    if(navbarNav.classList.contains("active")){
        navbarNav.classList.remove("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`
    }
    else{
        navbarNav.classList.add("active")
        toogleMenuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
})

// For size selection
var sizeButtons = document.querySelectorAll(".size-btn");
var selectedSize = document.getElementById("selected-size");

sizeButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Update selected size text
        selectedSize.textContent = button.textContent;
        // Remove active class from all buttons
        sizeButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });
        // Add active class to clicked button
        button.classList.add("active");
    });
});

// Get color options elements
var colorOptions = document.querySelectorAll(".color-option");

// Add event listener to each color option
colorOptions.forEach(function(option) {
    option.addEventListener("click", function() {
        // Remove active class from all color options
        colorOptions.forEach(function(opt) {
            opt.classList.remove("active");
        });
        // Add active class to clicked color option
        option.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const quantityInput = document.querySelector('.quantity-selector input[type="number"]');
    const minusButton = document.querySelector('.quantity-selector .minus-btn');
    const plusButton = document.querySelector('.quantity-selector .plus-btn');

    minusButton.addEventListener('click', function() {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    plusButton.addEventListener('click', function() {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = 'Item added to cart!';
    document.body.appendChild(popup);

    addToCartBtn.addEventListener('click', function() {
        popup.classList.add('show');
        setTimeout(function() {
            popup.classList.remove('show');
        }, 2000);
    });
});


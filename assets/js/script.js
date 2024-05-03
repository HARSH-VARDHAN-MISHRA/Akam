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


// For image changing
var MainImg = document.getElementById("MainImg");
var smallimg = document.querySelectorAll(".small-img");

smallimg.forEach(function(img) {
    img.addEventListener("click", function() {
        MainImg.src = img.src;
        removeBorder();
        img.style.borderColor = "#333";
    });
});

function removeBorder() {
    smallimg.forEach(function(img) {
        img.style.borderColor = "transparent";
    });
}

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


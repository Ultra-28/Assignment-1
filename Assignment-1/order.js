// Micro-interactions on hover
const heroSection = document.querySelector('#hero');
heroSection.addEventListener('mouseover', () => {
    heroSection.style.backgroundColor = "#64b79e";
});
heroSection.addEventListener('mouseout', () => {
    heroSection.style.backgroundColor = "#78c2ad";
});

// Promo code functionality
function applyPromo() {
    const promoCode = document.getElementById('promo-code').value;
    const result = document.getElementById('promo-result');

    if (promoCode === "HEALTHY10") {
        result.textContent = "Promo code applied! You get 10% off your first order.";
        result.style.color = "green";
    } else {
        result.textContent = "Invalid promo code. Please try again.";
        result.style.color = "red";
    }
}

// Contact form validation (basic example)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
// Function to switch main gallery image
function showImage(imageId) {
    const imageMap = {
        "img1": "images/food1.jpg",
        "img2": "images/food2.jpg",
        "img3": "images/food3.jpg",
        "img4": "images/food4.jpg"
    };

    document.getElementById("main-image").src = imageMap[imageId];

    // Update active tab
    const tabs = document.querySelectorAll('.image-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.querySelector(`[onclick="showImage('${imageId}')"]`).classList.add('active');
}

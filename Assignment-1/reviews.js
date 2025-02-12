document.getElementById("review-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let message = document.getElementById("message").value;

    // Create review element
    let reviewContainer = document.getElementById("review-list");
    let newReview = document.createElement("div");
    newReview.classList.add("review");
    newReview.innerHTML = `<p>"${message}" – <strong>${name}</strong></p><p>${"⭐️".repeat(rating)}</p>`;

    // Append review to the list
    reviewContainer.appendChild(newReview);

    // Save to local storage
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push({ name, rating, message });
    localStorage.setItem("reviews", JSON.stringify(reviews));

    // Reset form
    document.getElementById("review-form").reset();
});

// Load reviews from local storage on page load
window.onload = function() {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    let reviewContainer = document.getElementById("review-list");

    reviews.forEach(({ name, rating, message }) => {
        let newReview = document.createElement("div");
        newReview.classList.add("review");
        newReview.innerHTML = `<p>"${message}" – <strong>${name}</strong></p><p>${"⭐️".repeat(rating)}</p>`;
        reviewContainer.appendChild(newReview);
    });
};

// Star Rating System
const stars = document.querySelectorAll(".star");
stars.forEach(star => {
    star.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        document.getElementById("rating").value = value;
        stars.forEach(s => s.classList.remove("selected"));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("selected");
        }
    });
});

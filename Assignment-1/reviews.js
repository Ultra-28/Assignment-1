// Star Rating System
const stars = document.querySelectorAll(".star");
const ratingInput = document.getElementById("rating");

stars.forEach((star, index) => {
    star.addEventListener("click", function() {
        let selectedValue = index + 1;
        ratingInput.value = selectedValue;

        // Remove previous selections
        stars.forEach(s => s.classList.remove("selected"));

        // Highlight correct stars
        for (let i = 0; i < selectedValue; i++) {
            stars[i].classList.add("selected");
        }
    });
});

// Ensure previously selected rating is visible when submitting the review
document.getElementById("review-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get user input
    let name = document.getElementById("name").value;
    let rating = ratingInput.value;
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
    stars.forEach(s => s.classList.remove("selected")); // Reset selected stars
    ratingInput.value = 5; // Reset rating to 5 stars by default
});

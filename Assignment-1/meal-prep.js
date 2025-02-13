// Ensure everything updates on page load
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
    updateMealPlan();
});

// Meal Plan Calculation
function updateMealPlan() {
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFats = 0;

    document.querySelectorAll('.meal:checked').forEach(meal => {
        totalCalories += parseInt(meal.dataset.cal);
        totalProtein += parseInt(meal.dataset.pro);
        totalCarbs += parseInt(meal.dataset.carb);
        totalFats += parseInt(meal.dataset.fat);
    });

    if (document.getElementById('total-cal')) {
        document.getElementById('total-cal').textContent = totalCalories;
        document.getElementById('total-pro').textContent = totalProtein;
        document.getElementById('total-carb').textContent = totalCarbs;
        document.getElementById('total-fat').textContent = totalFats;
    }
}

// Cart System
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Ensure cart updates correctly on page load
updateCartCount();

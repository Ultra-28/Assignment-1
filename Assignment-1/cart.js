document.addEventListener("DOMContentLoaded", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartList = document.getElementById("cart-list");
    let totalPrice = 0;

    // Clear previous content (prevents duplication)
    cartList.innerHTML = "";

    // Loop through cart items and display them
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        cartList.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById("total-price").textContent = totalPrice;
});

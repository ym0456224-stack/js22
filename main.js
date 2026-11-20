const store = {
    name: "Tech Store",
    city: "Cairo",
    phone: "01012345678"
};

document.getElementById("store-name").innerHTML = store.name;
document.getElementById("store-info").innerHTML = `${store.city} | ${store.phone}`;

let cart = [
    { name: "mouse", price: 250, qty: 2 },
    { name: "keyboard", price: 450, qty: 1 },
    { name: "headset", price: 500, qty: 1 }
];

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function renderCart(cartArray, elementId) {
    const listElement = document.getElementById(elementId);
    listElement.innerHTML = "";
    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        let item = cartArray[i];
        let itemTotal = item.price * item.qty;
        total += itemTotal;

        let formattedName = capitalizeWords(item.name);

        listElement.innerHTML += `<li>${formattedName} - ${item.price} EGP x ${item.qty} = ${itemTotal} EGP</li>`;
    }

    return total;
}

renderCart(cart, "cart-before");

cart.push({ name: "mouse pad", price: 150, qty: 1 });
cart.unshift({ name: "usb cable", price: 0, qty: 1 });
cart.pop();
cart.shift();

let finalTotal = renderCart(cart, "cart-after");

document.getElementById("count").innerHTML = `You have ${cart.length} items in your cart`;


document.getElementById("total").innerHTML = `Total: ${finalTotal.toFixed(2)} EGP`;


const shippingElement = document.getElementById("shipping");
if (finalTotal > 1000) {
    shippingElement.innerHTML = "You got free shipping!";
} else {
    let remaining = 1000 - finalTotal;
    shippingElement.innerHTML = `Add ${remaining.toFixed(2)} EGP more for free shipping`;
}
let orders = [
    {
        name: "Ravi Kumar",
        phone: "+91-9876543210",
        farm: "Green Valley Farm, Rampur",
        milk: "Cow Milk",
        quantity: "3 Liters",
        price: "₹150"
    },
    {
        name: "Anjali",
        phone: "+91-9876541234",
        farm: "Fresh Dairy Farm, Chandausi",
        milk: "Buffalo Milk",
        quantity: "2 Liters",
        price: "₹120"
    },
    {
        name: "Rohan",
        phone: "+91-9876545678",
        farm: "Sunnydale Farm, Chandpur",
        milk: "Goat Milk",
        quantity: "1 Liter",
        price: "₹70"
    }
];

let table = document.getElementById("ordersTable");

orders.forEach(order => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <strong>${order.name}</strong><br>
            ${order.phone}<br>
            ${order.farm}
        </td>
        <td>${order.milk}</td>
        <td>${order.quantity}</td>
        <td>${order.price}</td>
        <td>
            <button class="accept">Accept</button>
            <button class="reject">Reject</button>
        </td>
    `;

    table.appendChild(row);
});
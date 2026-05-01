let data = [
    { date: "April 26", name: "Akriti Thakur", qty: "4 Liters", amount: "₹400", status: "Pending" },
    { date: "April 25", name: "Rohan", qty: "3 Liters", amount: "₹300", status: "Paid" },
    { date: "April 24", name: "Anjali", qty: "4 Liters", amount: "₹480", status: "Paid" },
    { date: "April 24", name: "Vikas", qty: "2 Liters", amount: "₹180", status: "Paid" },
    { date: "April 23", name: "Rohit", qty: "3 Liters", amount: "₹300", status: "Paid" },
    { date: "April 23", name: "Sakshi", qty: "2 Liters", amount: "₹180", status: "Paid" }
];

let table = document.getElementById("earningsTable");

data.forEach(item => {
    let row = document.createElement("tr");

    let badge = item.status === "Paid"
        ? `<span class="paid-badge">Paid</span>`
        : `<span class="pending-badge">Pending</span>`;

    row.innerHTML = `
        <td>${item.date}</td>
        <td>${item.name}</td>
        <td>${item.qty}</td>
        <td>${item.amount}</td>
        <td>${badge}</td>
        <td>${badge}</td>
    `;

    table.appendChild(row);
});
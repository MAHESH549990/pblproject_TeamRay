document.addEventListener("DOMContentLoaded", () => {
  const buttonMessages = {
    logout: "Logout action can be linked to your authentication page.",
    "add-farm": "Add Farm button is ready to connect with your farm form page.",
    "view-orders": "View Orders can be connected to the merchant orders section.",
    "view-earnings": "View Earnings can be connected to the earnings report page.",
    "manage-farm": "Manage can be linked to a specific farm details page."
  };

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action || button.textContent.trim().toLowerCase();
      const message = buttonMessages[action];
      if (message) {
        alert(message);
      }
    });
  });
});

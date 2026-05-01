document.getElementById("farmForm").addEventListener("submit", function(e) {

  e.preventDefault(); // form submit rokna

  let isValid = true;

 
  let inputs = document.querySelectorAll("#farmForm input[required], #farmForm select[required]");

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      isValid = false;
    } else {
      input.style.border = "1px solid #ccc";
    }
  });

  
  let cowPrice = document.getElementById("cowPrice");
  let buffaloPrice = document.getElementById("buffaloPrice");

  if (cowPrice && cowPrice.value <= 0) {
    cowPrice.style.border = "2px solid red";
    isValid = false;
  }

  if (buffaloPrice && buffaloPrice.value <= 0) {
    buffaloPrice.style.border = "2px solid red";
    isValid = false;
  }

  
  let cowPh = document.getElementById("cowPh");
  let buffaloPh = document.getElementById("buffaloPh");

  if (cowPh && cowPh.value && (cowPh.value < 6.4 || cowPh.value > 6.7)) {
    cowPh.style.border = "2px solid red";
    isValid = false;
  }

  if (buffaloPh && buffaloPh.value && (buffaloPh.value < 6.7 || buffaloPh.value > 6.8)) {
    buffaloPh.style.border = "2px solid red";
    isValid = false;
  }

  // 👉 4. Milk checkbox validation (UPDATED 🔥)
  let milkTypes = document.querySelectorAll('input[name="milk"]:checked');

  if (milkTypes.length === 0) {
    alert("⚠️ Please select at least one milk type!");
    isValid = false;
  }

  // 👉 5. Final result
  if (isValid) {
    alert("✅ Form Submitted Successfully!");
    
    // 👉 OPTIONAL: form reset after submit
    this.reset();
    
  } else {
    alert("❌ Please fill all correct details!");
  }

});


/* 👉 CLEAR BUTTON */
document.querySelector(".clear-btn").addEventListener("click", function () {

  let confirmClear = confirm("Are you sure you want to clear the form?");

  if (confirmClear) {
    document.getElementById("farmForm").reset();
  }

});
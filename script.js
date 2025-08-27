// 🎮 Part 1: Event Handling Example
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "Button clicked!";
});

// 🎮 Part 2: Interactive Features

// 1. Light/Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter Game
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  counter--;
  counterValue.textContent = counter;
});

// 3. Collapsible FAQ
const faqTitle = document.querySelector(".faq-title");
const faqContent = document.querySelector(".faq-content");

faqTitle.addEventListener("click", () => {
  faqContent.style.display =
    faqContent.style.display === "block" ? "none" : "block";
});

// 📋 Part 3: Form Validation
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent submission if errors exist

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // If everything is valid
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "Form submitted successfully!";
    form.reset();
  }
});

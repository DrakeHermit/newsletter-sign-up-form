// Change the illustration based on screensize
const screenWidth = window.innerWidth;
const illustration = document.getElementById("illustration");

if (screenWidth >= 760) {
  illustration.src = "/assets/images/illustration-sign-up-desktop.svg";
}

// General functions
const createEl = () => {
  const p = document.createElement("p");
  if (emailInput.value === "") {
    p.className = "error__message";
    p.textContent = "This field is required";
  } else {
    p.className = "error__message";
    p.textContent = "Enter a valid email";
  }

  form.appendChild(p);

  return p;
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

const emailInput = document.getElementById("email");
const form = document.getElementById("form");
const mainContent = document.getElementById("main__card");

const handleSubmit = (e) => {
  e.preventDefault();
  const emailInputValue = emailInput.value;
  const validEmail = isValidEmail(emailInputValue);

  if (!validEmail) {
    emailInput.classList.add("error__state");
    createEl();
  } else {
    while (mainContent.firstChild) {
      mainContent.removeChild(mainContent.firstChild);
    }
  }

  return emailInput;
};

form.addEventListener("submit", handleSubmit);

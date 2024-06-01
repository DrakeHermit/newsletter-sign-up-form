const checkMarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>`;

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

const removeErrorState = () => {
  setTimeout(() => {
    form.removeChild(form.children[2]);
    emailInput.classList.remove("error__state");
    emailInput.value = "";
  }, 2000);
};

const openOnSuccess = () => {
  mainContent.innerHTML = `
    ${checkMarkSvg}
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation email has been sent to <span>${emailInput.value}.</span> Please open it and click the button inside to confirm your subscription.</p>

  `;

  mainContent.classList.remove("main__card");
  mainContent.classList.add("main__card-success");
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
    removeErrorState();
  } else {
    openOnSuccess();
  }

  return emailInput;
};

form.addEventListener("submit", handleSubmit);

const inputContainers = document.querySelectorAll(".input-container");

const inputContOne = inputContainers[0];
const inputContTwo = inputContainers[1];

const usernameInput = document.querySelector("#username");
const userIcon = document.querySelector(".fa-user");

usernameInput.addEventListener("input", (event) => {
    let test = event.target.value;
    console.log(test);
    if (!event.target.value) {
        inputContOne.appendChild(userIcon);
    }
    if (event.target.value && inputContOne.contains(userIcon)) {
        inputContOne.removeChild(userIcon);
    }

});

const passwordInput = document.querySelector("#password")
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", (event) => {
    // gets the attribute on passwordInput
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";

    passwordInput.setAttribute("type", type);

    event.target.classList.toggle("fa-eye");
});

btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    event.preventDefault();
});
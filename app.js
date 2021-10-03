const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value
  loginForm.classList.toggle("hidden")
  localStorage.setItem("username", username);
  greeting.innerText = `HELLO ${username}`
  greeting.classList.toggle("hidden")
}


loginForm.addEventListener("submit", onLoginSubmit)
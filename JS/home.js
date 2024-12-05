var welcomeMessage = document.getElementById("welcomeMessage")
var logoutBtn = document.querySelector(".logoutBtn")


username=localStorage.getItem("username");

welcomeMessage.innerHTML =`<h2 class="m-auto fw-bold">Welcome ${username} </h2>`

logoutBtn.addEventListener("click",function() {
  window.location.href="index.html"
});

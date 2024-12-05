var signinEmail = document.getElementById("signinEmail");
var signinpassword = document.getElementById("signinPassword");
var loginBtn = document.getElementById("loginBtn");
var signupAnchor = document.getElementById("signupAnchor");


var usersList = [];

if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
}
function userLogin() {
  var userEmail = signinEmail.value;
  var userPass = signinpassword.value;
  for (var i = 0; i < usersList.length; ++i) {
    if( signinEmail.value=="" || signinpassword.value==""){
        error.innerHTML = `<p class="text-danger text-center">All inputs are required</p>`;
    }
    else if (
      usersList[i].password === userPass &&
      usersList[i].email.toLowerCase() === userEmail.toLowerCase()
    ) {
      error.innerHTML = `<p class="text-success text-center">Success</p>`;
      window.location.href = "home.html";
    }
    else{
      error.innerHTML = `<p class="text-danger text-center">Incorrect email oe password</p>`;
    }
    localStorage.setItem("username", usersList[i].name);
}
}

loginBtn.addEventListener("click", userLogin);


signupAnchor.addEventListener("click", function(){
    window.location.href = "signup.html";
})


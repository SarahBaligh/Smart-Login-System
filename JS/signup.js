var signupUserName = document.getElementById("signupUserName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signupBtn");
var signinAnchor = document.getElementById("signinAnchor");
var error = document.getElementById("error");
var alert = document.getElementById("alert");

var usersList = [];

if (localStorage.getItem("users")) {
  usersList = JSON.parse(localStorage.getItem("users"));
}

nameRegex = /^[a-zA-Z 0-9_]{2,}$/;
emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
function Validation(regex, input) {
  if (regex.test(input.value)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  }
}
signupUserName.addEventListener("input", function () {
  Validation(nameRegex, signupUserName);
});
signupEmail.addEventListener("input", function () {
  Validation(emailRegex, signupEmail);
});
signupPassword.addEventListener("input", function () {
  Validation(passwordRegex, signupPassword);
});

function getUser() {
  var user = {
    name: signupUserName.value,
    email: signupEmail.value,
    password: signupPassword.value,
  };
  if (
    signupUserName.value == "" ||
    signupEmail.value == "" ||
    signupPassword.value == ""
  ) {
    error.innerHTML = `<p class="text-danger text-center">All inputs are required</p>`;
    confirmInputs();
  } else if (isNewEmail() != true) {
    error.innerHTML = `<p class="text-danger text-center">email already in use</p>`;
  } else if (Validation(passwordRegex, signupPassword) != true) {
    error.innerHTML = `<p class="text-danger text-center">Invalid Pass</p>`;
  } else if (isNewEmail()) {
    if (
      Validation(nameRegex, signupUserName) &&
      Validation(emailRegex, signupEmail) &&
      Validation(passwordRegex, signupPassword)
    ) {
      usersList.push(user);
      localStorage.setItem("users", JSON.stringify(usersList));
      clearValues();
      error.innerHTML = `<p class="text-success text-center">Success</p>`;

      window.location.href = "index.html";
    }
  }
}

signupBtn.addEventListener("click", function () {
  getUser();
  if (!Validation(passwordRegex, signupPassword)) {
    alert.classList.replace("d-none", "d-block");
  } else {
    alert.classList.replace("d-block", "d-none");
  }
});

function clearValues() {
  signupUserName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
}

function isNewEmail() {
  for (var i = 0; i < usersList.length; ++i) {
    if (usersList[i].email === signupEmail.value) {
      return false;
    }
  }
  return true;
}

function confirmInputs() {
  var valid = true;
  if (!Validation(nameRegex, signupUserName)) {
    valid = false;
  }
  if (!Validation(emailRegex, signupEmail)) {
    valid = false;
  }
  if (!Validation(passwordRegex, signupPassword)) {
    valid = false;
  }
  return valid;
}

signinAnchor.addEventListener("click", function () {
  window.location.href = "index.html";
});

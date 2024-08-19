const pwd1 = document.getElementById("input-password");
const pwd2 = document.getElementById("input-confirm-password");

const invalidText = document.getElementById("invalid-pwd-text");

const submitBtn = document.getElementById("create-account-btn");

submitBtn.addEventListener("click", validatePassword);

function validatePassword() {
  if (pwd1.value === pwd2.value) {
    pwd1.setCustomValidity("");
    pwd2.setCustomValidity("");
    invalidText.classList.add("hidden");
  } else {
    pwd1.setCustomValidity("Invalid field.");
    pwd2.setCustomValidity("Invalid field.");
    invalidText.classList.remove("hidden");
  }
}

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const query = document.getElementsByName("query");
const message = document.getElementById("message");
const permission = document.getElementById("permission");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const queryError = document.getElementById("queryError");
const messageError = document.getElementById("messageError");
const permissionError = document.getElementById("permissionError");

function showEmptyError(inputElement, errorElement) {
  if (inputElement.value.trim() === "") {
    errorElement.textContent = "This field is required";
    errorElement.style.display = "block";
    inputElement.style.borderColor = "#d73c3c";
    return true;
  } else {
    errorElement.style.display = "none";
    inputElement.style.borderColor = "#87a3a6";
    return false;
  }
}

function emailValidation(emailElement, errorElement) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailElement.value)) {
    errorElement.textContent = "Please enter a valid email address";
    errorElement.style.display = "block";
    emailElement.style.borderColor = "#d73c3c";
    return true;
  } else {
    errorElement.style.display = "none";
    emailElement.style.borderColor = "#87a3a6";
    return false;
  }
}

function querySelectionError(queryElements, errorElement) {
  // Check if any of the radio buttons are checked
  const isAnySelected = Array.from(queryElements).some(
    (element) => element.checked
  );

  if (!isAnySelected) {
    errorElement.textContent = "Please select a query type";
    errorElement.style.display = "block";
    return true;
  } else {
    errorElement.style.display = "none";
    return false;
  }
}
function permissionErrorValid(permissionEl, errorElement) {
  if (!permissionEl.checked) {
    errorElement.textContent =
      "To submit this form, please consent to being contacted";
    errorElement.style.display = "block";
    return true;
  } else {
    errorElement.style.display = "none";
    return false;
  }
}

function submitForm(event) {
  event.preventDefault();

  const isFirstNameEmpty = showEmptyError(firstName, firstNameError);
  const isLastNameEmpty = showEmptyError(lastName, lastNameError);
  const messageEmpty = showEmptyError(message, messageError);

  const permissionValidation = permissionErrorValid(
    permission,
    permissionError
  );

  const querySelected = querySelectionError(query, queryError);

  const emailEmpty = showEmptyError(email, emailError);
  let isEmailInvalid = false;
  if (!emailEmpty) {
    isEmailInvalid = emailValidation(email, emailError);
  }

  if (
    isFirstNameEmpty ||
    isLastNameEmpty ||
    emailEmpty ||
    isEmailInvalid ||
    querySelected ||
    messageEmpty ||
    permissionValidation
  ) {
    return;
  }

  // Show success message if validation passed

  const successMessage = document.getElementById("successMessage");
  successMessage.classList.add("show");
  setTimeout(() => {
    successMessage.classList.remove("show");
  }, 3000);
}


function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
}

function showLogin() {
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
}


  // Variables for the forms
  var NameForm = document.getElementById('NameForm');
  var PhoneForm = document.getElementById('PhoneForm');
  var ConfirmPassForm = document.getElementById('ConfirmPassForm');
  var EmailSignUpForm = document.getElementById('EmailSignUpForm');
  var PassSignUpForm = document.getElementById('PassSignUpForm');
  var EmailSignInForm = document.getElementById('EmailSignInForm');
  var PassSignInForm = document.getElementById('PassSignInForm');
  var SignUpButton = document.getElementById('SignUpButton');
  var SignInButton = document.getElementById('SignInButton');

  // Regex patterns
  const NameRegex = /^[a-z0-9_-]{3,15}$/;
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const EmailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const PassRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  //  function to update validation state
  function updateValidationState(inputElement, isValid) {
    if (isValid) {
      inputElement.classList.add("is-valid");
      inputElement.classList.remove("is-invalid");
    } else {
      inputElement.classList.add("is-invalid");
      inputElement.classList.remove("is-valid");
    }
  }

  function validateName() {
    const isValid = NameRegex.test(NameForm.value);
    updateValidationState(NameForm, isValid);
    return isValid;
  }

  function validatePhone() {
    PhoneForm.value = PhoneForm.value.trim();
    const isValid = phoneRegex.test(PhoneForm.value);
    updateValidationState(PhoneForm, isValid);
    return isValid;
  }

  function validateEmail(inputElement) {
    const isValid = EmailRegex.test(inputElement.value);
    updateValidationState(inputElement, isValid);
    return isValid;
  }

  function validateSignUpPass() {
    const isValid = PassRegex.test(PassSignUpForm.value);
    updateValidationState(PassSignUpForm, isValid);
    return isValid;
  }

  function validateSignInPass() {
    const isValid = PassRegex.test(PassSignInForm.value);
    updateValidationState(PassSignInForm, isValid);
    return isValid;
  }

  function validateConfirmPassword() {
    const isValid = ConfirmPassForm.value === PassSignUpForm.value && PassSignUpForm.value !== '';
    updateValidationState(ConfirmPassForm, isValid);
    return isValid;
  }

  // Add event listeners
  NameForm.addEventListener('input', validateName);
  PhoneForm.addEventListener('input', validatePhone);
  EmailSignUpForm.addEventListener('input', () => validateEmail(EmailSignUpForm));
  EmailSignInForm.addEventListener('input', () => validateEmail(EmailSignInForm));
  PassSignUpForm.addEventListener('input', validateSignUpPass);
  PassSignInForm.addEventListener('input', validateSignInPass);
  ConfirmPassForm.addEventListener('input', validateConfirmPassword);

  SignUpButton.addEventListener('click', function (event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail(EmailSignUpForm);
    const isPassValid = validateSignUpPass();
    const isConfirmPassValid = validateConfirmPassword();

    if (isNameValid && isPhoneValid && isEmailValid && isPassValid && isConfirmPassValid) {
      alert('Form submitted successfully!');

      showLogin();

    } else {
      alert('Please fix the errors in the form.');
    }
  });

  SignInButton.addEventListener('click', function (event) {
    event.preventDefault();

    const isEmailValid = validateEmail(EmailSignInForm);
    const isPassValid = validateSignInPass();

    if (isEmailValid && isPassValid) {
      alert('Login successful!');
      window.location.href = "index.html";

    } else {
      alert('Please fix the errors in the form.');
    }
  });

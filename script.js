// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Function to show the registration form and hide the login form
 */
function showRegister() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('registration-form').classList.add('active');
    clearErrors(); // Clear any existing error messages
}

/**
 * Function to show the login form and hide the registration form
 */
function showLogin() {
    document.getElementById('registration-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
    clearErrors(); // Clear any existing error messages
}

/**
 * Function to validate email format using regex
 * @param {string} email - The email address to validate
 * @returns {boolean} - Returns true if email is valid, false otherwise
 */
function validateEmail(email) {
    return emailRegex.test(email);
}

/**
 * Function to clear all error messages
 */
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
}

/**
 * Function to handle login form submission
 */
function login() {
    // Retrieve input values
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Retrieve error message elements
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');

    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let valid = true;

    // Validate email format
    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        valid = false;
    }

    // Validate password length
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.display = 'block';
        valid = false;
    }

    // If all validations pass
    if (valid) {
        // Here you can add actual login logic (e.g., API call)
        alert(`Logged in successfully with email: ${email}`);
        // Optionally, redirect the user to another page
    }
}

/**
 * Function to handle registration form submission
 */
function register() {
    // Retrieve input values
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    // Retrieve error message elements
    const nameError = document.getElementById('reg-name-error');
    const emailError = document.getElementById('reg-email-error');
    const passwordError = document.getElementById('reg-password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const ageError = document.getElementById('age-error');
    const genderError = document.getElementById('gender-error');
    const countryError = document.getElementById('country-error');
    const termsError = document.getElementById('terms-error');

    // Reset error messages
    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    confirmPasswordError.style.display = 'none';
    ageError.style.display = 'none';
    genderError.style.display = 'none';
    countryError.style.display = 'none';
    termsError.style.display = 'none';

    let valid = true;

    // Validate name
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    }

    // Validate email format
    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        valid = false;
    }

    // Validate password length
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.display = 'block';
        valid = false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    }

    // Validate age range
    const ageNumber = parseInt(age, 10);
    if (isNaN(ageNumber) || ageNumber < 18 || ageNumber > 100) {
        ageError.textContent = 'Age must be between 18 and 100';
        ageError.style.display = 'block';
        valid = false;
    }

    // Validate gender selection
    if (!gender) {
        genderError.textContent = 'Please select your gender';
        genderError.style.display = 'block';
        valid = false;
    }

    // Validate country selection
    if (country === '') {
        countryError.textContent = 'Please select your country';
        countryError.style.display = 'block';
        valid = false;
    }

    // Validate terms agreement
    if (!terms) {
        termsError.textContent = 'You must agree to the terms';
        termsError.style.display = 'block';
        valid = false;
    }

    // If all validations pass
    if (valid) {
        // Here you can add actual registration logic (e.g., API call)
        alert(`Registered successfully with email: ${email}`);
        // Optionally, switch to login form after registration
        showLogin();
    }
}
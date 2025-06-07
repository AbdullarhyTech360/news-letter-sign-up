const myForm = document.querySelector('form');
const emailInput = document.getElementById('email');
const radiusTrigger = [emailInput, document.querySelector('button[type="submit"]')];
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

myForm.onsubmit = function (event) {
    event.preventDefault();
    console.log(!emailInput.classList.contains('error-state'), emailInput.value);
    if (!emailInput.classList.contains('error-state') && emailInput.value != "") {
        console.log("good email");
        document.getElementById('success-container').classList.remove('hidden');
        document.getElementById('form-container').classList.add('!hidden');
        document.getElementById('email-display').textContent = emailInput.value;
    } else {
        console.log("bad email");
        document.getElementById('error-message').classList.add('show-error');
        emailInput.classList.add('error-state');
    }
}

emailInput.oninput = function () {
    document.getElementById('desktop-image').classList.remove('rounded-3xl');
    if (!regex.test(this.value)) {
        this.classList.add('error-state');
        document.getElementById("error-message").classList.add('show-error');
    } else {
        document.getElementById("email").classList.remove('error-state');
        document.getElementById("error-message").classList.remove('show-error');
    }
}

radiusTrigger.forEach(element => {
    element.onfocus = function () {
        document.getElementById('desktop-image').classList.remove('rounded-3xl');
    }
    element.onblur = function () {
        document.getElementById('desktop-image').classList.add('rounded-3xl');
    }
});

document.getElementById('dismiss-button').onclick = () => window.location.reload();
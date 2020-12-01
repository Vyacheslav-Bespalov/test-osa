document.addEventListener("DOMContentLoaded", function(event) {
    
    const form = document.querySelector('.form');
    const formSubmit = form.querySelector('.form__submit');


    const checkForm = () => {
        if (form.checkValidity()) {
            formSubmit.removeAttribute('disabled', 'disabled');
        } else {
            formSubmit.setAttribute('disabled', 'disabled');
        }
    }

    let timeout;
    const checkTimeout = () => {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        timeout = window.setTimeout(checkForm, 500);
    }

    form.addEventListener('input', checkTimeout);
});
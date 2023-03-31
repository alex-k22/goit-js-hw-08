import throttle from "lodash.throttle";

const inputEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const form = document.querySelector(".feedback-form");
const FORM_STATE = "feedback-form-state"

let formData = {
    email: "",
    message: ""
}

updateForm();

inputEl.addEventListener('input', throttle(() => {
    formData.email = inputEl.value;
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
}, 500)
);

messageEl.addEventListener('input', throttle(() => {
    formData.message = messageEl.value;  
    localStorage.setItem(FORM_STATE, JSON.stringify(formData));
}, 500)
);

form.addEventListener("submit", handleSubmit);

function updateForm()  {
    if (localStorage.getItem(FORM_STATE)) {
        formData.email = JSON.parse(localStorage.getItem(FORM_STATE)).email;
        formData.message = JSON.parse(localStorage.getItem(FORM_STATE)).message;
        inputEl.value = formData.email;
        messageEl.value = formData.message;
    } else {
        return;
    }
}

function handleSubmit(event) {
    event.preventDefault();

    if (inputEl.value && messageEl.value) {
    console.log(formData);
    localStorage.clear();
    event.currentTarget.reset();
    formData = {
        email: "",
        message: ""
    }
    } else {
        alert("Please make sure all fields are filled!")
    }
}
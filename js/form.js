// DOM element

const lastName = document.querySelector("#last_name");
const form = document.querySelector("#contact-form");

// regexr
// /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+
// for email
const validEmail =
    /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/gi;
// for name
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;

form.setAttribute("nonvalidate", true);

form.onsubmit = submitForm;

function submitForm(e) {
    e.preventDefault();
    console.log("hello");
}

function validInput(regex, input) {
    return regex.test(input.value);
}
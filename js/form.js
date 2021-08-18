// DOM element

const lastName = document.querySelector("#last_name");
const form = document.querySelector("#contact-form");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");

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
    openModal();
}

function validInput(regex, input) {
    return regex.test(input.value);
}

// for opening modal
const openModal = function() {
    modal.classList.remove("hidden");
};
// for closing modal
const closeModal = function() {
    modal.classList.add("hidden");
};
// use close function closing button
btnCloseModal.addEventListener("click", closeModal);
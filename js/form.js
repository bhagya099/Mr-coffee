// DOM element

const lastName = document.querySelector("#last_name");
const firstName = document.querySelector("#first_name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const form = document.querySelector("#contact-form");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const valid = document.querySelector(".is-valid");
const nonValid = document.querySelector(".nonValid");

// for email
const validEmail =
    /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/;
// for name
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/;

form.setAttribute("novalidate", true);

form.onsubmit = submitForm;

function submitForm(e) {
    e.preventDefault();
    // for validation

    if (
        validInput(validName, firstName) &&
        validInput(validName, lastName) &&
        validInput(validEmail, email)
    ) {
        console.log(
            `Firstname : ${firstName.value} \nLastName:${lastName.value} \nEmail:${email.value} \nPhone:${phone.value} \n`
        );
        openModal();
    } else {
        console.log(`Please put valid things`);
    }
}

// validation function
function validInput(regex, input) {
    // return true if test is match
    return regex.test(input.value);
}

// for opening modal
const openModal = function() {
    modal.classList.remove("hidden");
};
// for closing modal
const closeModal = function() {
    modal.classList.add("hidden");
    form.reset();
};
// use close function closing button
btnCloseModal.addEventListener("click", closeModal);
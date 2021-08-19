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
console.log(nonValid);
// regexr
// /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+
// for email
const validEmail =
    /^[A-Za-z0-9\._\-]+@[A-Za-z]+[A-Za-z0-9\-]+[A-Za-z]+(\.[A-Za-z0-9\-]+)+$/gi;
// for name
const validName = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 \.'\-]+$/gi;

form.setAttribute("nonvalidate", true);

form.onsubmit = submitForm;

function submitForm(e) {
    e.preventDefault();
    // for validation
    let validateForm = 0;
    // console.log(
    //     `${message.value},${phone.value},${firstName.value},${lastName.value},${email.value},${phone.value}`
    // );
    console.log(validInput(validName, firstName));
    console.log(validInput(validName, lastName));
    if (validInput(validName, firstName)) {
        console.log(lastName.value);
        console.log(nonValid);
        nonValid.setAttribute("style", "border: #EC3A0E solid 3px ");
    } else {
        console.log("hi");
    }
    // } else {
    //     console.log('nonvalid');
    //     // lastName.classList.remove('is-valid');
    //     // lastName.classList.add('nonValid');
    //     nonValid.setAttribute('style', "display:block")
    //     validateForm++;
    // }

    // openModal();
}

// validation function
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
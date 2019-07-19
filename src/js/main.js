import {firstName} from './userName';
import {email} from './email';
import {phoneNumber} from "./phoneNumber";
import {textarea} from "./textarea";
import {chooseCountry} from "./chooseCountry";
import {chooseState} from "./chooseState";
import {chooseCity} from "./chooseCity";
import {ajax} from "./AJAX";
import {modal} from "./modal";

class ValidateTest {

    validateAllFields() {
        if (firstName.validateName()) {
            if (email.validateEmail()) {
                if (phoneNumber.validatePhone()) {
                    if (chooseCountry.country()) {
                        if (chooseState.state()) {
                            if (chooseCity.city()) {
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false;
    }
}

let validateTest = new ValidateTest();

//textarea
textarea.textareaListener();

//listener country
document.getElementById("select_countries").addEventListener("change", chooseCountry.country);

//listener state
document.getElementById("select_states").addEventListener("change", chooseState.state);

//listener city
document.getElementById("select_city").addEventListener("change", chooseCity.city);

// get: countries, states, cities, users
ajax.get();

// SUBMIT
let form = document.getElementById('formID');
form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    console.log('submit');

    phoneNumber.validatePhone();
    email.validateEmail();
    firstName.validateName();
    chooseCountry.country();
    chooseState.state();
    chooseCity.city();

    if (validateTest.validateAllFields() && chooseCountry.country() && chooseState.state() && chooseCity.city()) {

        //modal
        modal.createModal();

        //axios post
        ajax.post();
    }
});

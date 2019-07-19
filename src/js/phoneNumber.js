class PhoneNumber {
    constructor() {
        this.phone_number = document.getElementById('phone_number');
    }

    validatePhone() {
        let valNum = /^\d{11}$/;
        if (this.phone_number.value.match(valNum)) {
            let closest = this.phone_number.closest("div");
            closest.classList.remove("error");
            closest.classList.add("success");

            this.phone_number.classList.remove("invalid");
            this.phone_number.classList.add("valid");
            return true;
        } else {
            let closest = this.phone_number.closest("div");
            closest.classList.add("error");
            this.phone_number.classList.add("invalid");
            // alert("You have entered an invalid Phone number");
            this.phone_number.focus();
            return false;
        }
    }
}

export let phoneNumber = new PhoneNumber();
class Email {
    constructor() {
        this.email = document.getElementById('email');
    }

    validateEmail() {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (this.email.value.match(mailformat)) {
            let closest = this.email.closest("div");
            closest.classList.remove("error");
            closest.classList.add("success");

            this.email.classList.remove("invalid");
            this.email.classList.add("valid");
            return true;
        } else {
            let closest = this.email.closest("div");
            closest.classList.add("error");
            this.email.classList.add("invalid");
            // alert("You have entered an invalid email address!");
            this.email.focus();
            return false;
        }
    }
}

export let email = new Email();
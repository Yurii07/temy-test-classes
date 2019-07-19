class FirstName {
    constructor() {

        this.uname = document.getElementById('first_name');
    }

    validateName() {
        let letters = /^[A-Za-z]+$/;
        if (this.uname.value.match(letters)) {
            let closest = this.uname.closest("div");
            closest.classList.remove("error");
            this.uname.classList.remove("invalid");
            closest.classList.add("success");
            this.uname.classList.add("valid");
            return true;
        } else {
            let closest = this.uname.closest("div");
            closest.classList.add("error");
            this.uname.classList.add("invalid");
            // alert('The name should contain only letters');
            this.uname.focus();
            return false;
        }
    }
}

export let firstName = new FirstName();

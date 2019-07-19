class ChooseState {
    state() {
        let closest = document.getElementById("select_states").closest("div");
        if (document.getElementById("select_states").value === "Default") {
            closest.classList.add("error");
            return false;
        } else {
            document.getElementById("select_city").disabled = false;
            closest.classList.remove("error");
            closest.classList.add("success");
            return true;
        }
    }
}

export let chooseState = new ChooseState();
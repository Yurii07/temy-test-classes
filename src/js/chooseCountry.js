class ChooseCountry {
    country() {
        let closest = document.getElementById("select_countries").closest("div");
        if (document.getElementById("select_countries").value === "Default") {
            closest.classList.add("error");
            return false;
        } else {
            document.getElementById("select_states").disabled = false;
            closest.classList.remove("error");
            closest.classList.add("success");
            return true;
        }
    }
}

export let chooseCountry = new ChooseCountry();
class ChooseCity {
    city() {
        let closest = document.getElementById("select_city").closest("div");
        if (document.getElementById("select_city").value === "Default") {
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

export let chooseCity = new ChooseCity();
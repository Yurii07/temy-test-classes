class Ajax {
    constructor() {
        this.countries = 'http://127.0.0.1:3000/countries';
        this.states = 'http://127.0.0.1:3000/states';
        this.cities = 'http://127.0.0.1:3000/cities';
        this.users = 'http://127.0.0.1:3000/users';
    }

    get() {
        axios.get(this.countries)
            .then(function (response) {
                //paste country to list
                let select_countries = document.getElementById('select_countries');

                response.data.forEach(function (index) {

                    let countries = [index.name];

                    for (let i = 0; i < countries.length; i++) {
                        let el = document.createElement('option');
                        el.textContent = countries[i];
                        el.value = countries[i];
                        select_countries.appendChild(el);
                    }
                });
                // console.log(response.data[0].name, 'paste option to country');

                let ulCountry_id = document.createElement('ul');
                for (let i = 0; i < response.data.length; i++) {
                    let el = document.createElement('li');
                    el.textContent = response.data[i].id;
                    el.value = response.data[i].id;
                    ulCountry_id.appendChild(el);
                }
                // console.log(ulCountry_id,'ulCountry_id list');

            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(this.states)
            .then(function (response) {
                // paste list to state
                let select_states = document.getElementById('select_states');

                response.data.forEach(function (index) {

                    let states = [index.name];

                    for (let i = 0; i < states.length; i++) {
                        let el = document.createElement('option');
                        el.textContent = states[i];
                        el.value = states[i];
                        select_states.appendChild(el);
                    }
                });
                // console.log(response.data,'paste list to state');

                let ulState_id = document.createElement('ul');
                for (let i = 0; i < response.data.length; i++) {
                    let el = document.createElement('li');
                    el.textContent = response.data[i].id;
                    el.value = response.data[i].id;
                    ulState_id.appendChild(el);
                }

                // console.log(ulState_id,'ulState_id');
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(this.cities)
            .then(function (response) {
                //paste list to city
                let select_city = document.getElementById('select_city');

                response.data.forEach(function (index) {

                    let cities = [index.name];

                    for (let i = 0; i < cities.length; i++) {
                        let el = document.createElement('option');
                        el.textContent = cities[i];
                        el.value = cities[i];
                        select_city.appendChild(el);
                    }
                });

                // console.log(response.data, 'paste list to city');

                let ulCity_id = document.createElement('ul');
                for (let i = 0; i < response.data.length; i++) {
                    let el = document.createElement('li');
                    el.textContent = response.data[i].state_id;
                    el.value = response.data[i].state_id;
                    ulCity_id.appendChild(el);
                }
                // console.log(ulCity_id, 'ulCity_id');
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(this.users)
            .then(function (response) {
                let users_id = document.getElementById('users');
                for (let i = 0; i < response.data.length; i++) {

                    let el = document.createElement('li');
                    el.textContent = response.data[i].name;
                    el.classList.add("chip");
                    el.setAttribute("value", response.data[i].id);
                    users_id.appendChild(el);
// append icon user
                    let icon = document.createElement("i");
                    icon.textContent = "person";
                    icon.classList.add("material-icons");
                    el.appendChild(icon);

                }
                // console.log(users_id, 'ulUsers_id');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    post() {
        let first_name = document.getElementById('first_name').value,
            email = document.getElementById('email').value,
            phone_number = document.getElementById('phone_number').value,
            address = document.getElementById('address').value,
            about = document.getElementById('textareaID').value,
            select_countries = document.getElementById('select_countries').value,
            select_states = document.getElementById('select_states').value,
            select_city = document.getElementById('select_city').value,
            form = document.getElementById('formID');

        let postData = {
            name: first_name,
            email: email,
            phone_number: phone_number,
            address: address,
            about_me: about,
            country_id: select_countries,
            state_id: select_states,
            city_id: select_city,
        };
        axios.post(this.users,
            JSON.stringify(postData),
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then(function (response) {
                console.log(response);

                // location.reload();

                let users_id = document.getElementById('users');
                let el = document.createElement('li');
                el.classList.add("chip");
                el.textContent = response.data.name;
                users_id.appendChild(el);
// append icon user
                let icon = document.createElement("i");
                icon.textContent = "person";
                icon.classList.add("material-icons");
                el.appendChild(icon);
                // clear fields
                form.reset();
// remove classes in .field, input
                document.querySelectorAll(".field, input").forEach(function (element) {
                    element.classList.remove("success");
                    element.classList.remove("valid");
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

}

export let ajax = new Ajax();
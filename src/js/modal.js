class Modal {
    createModal() {
        let modal = document.getElementById("modal1"),
            but = document.getElementById('popup__close');
        modal.style['display'] = 'flex';
        // modal btn close
        but.addEventListener("click", function () {
            modal.style['display'] = 'none';
        });
    }
}

export let modal = new Modal();
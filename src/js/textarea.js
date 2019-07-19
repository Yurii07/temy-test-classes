class Textarea {
    textareaListener() {
        let textarea = document.getElementById("textareaID"),
            x = document.querySelector(".input-field label");

        textarea.addEventListener("input", function () {
            document.getElementById("charcount").innerHTML = textarea.value.length + ' / 500 ';
            if (textarea.value.length >= textarea.getAttribute("maxlength")) {
                alert('You have reached the maximum length of characters')
            }
        });
        textarea.addEventListener("focus", function () {
            let lng = this.value.length;
            if (lng === 0) {
                x.classList.add("active");
            }
        });
        textarea.addEventListener("blur", function () {
            let lng = this.value.length;
            if (lng === 0) {
                x.classList.remove("active");
            } else {
                x.classList.add("active");
            }
        });

    }
}

export let textarea = new Textarea();
var input = document.querySelector("#password");
var eyecon = document.querySelector("#eyecon");
eyecon.onclick = function () {
    if (input.type === "password") {
        input.type = "text";
        eyecon.src = 'eye-icons/eye-open.png';
    }
    else {
        input.type = "password";
        eyecon.src = 'eye-icons/eye-close.png';
    }
};

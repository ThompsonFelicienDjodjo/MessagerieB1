const displayForm = _("displayForm");
const forLogin = _("forLogin");
const loginForm = _("loginForm");
const forRegister = _("forRegister");
const registerForm = _("registerForm");
const formContainer = _("formContainer");


displayForm.addEventListener("click", showForm);




function _(e) {
    return document.getElementById(e);

}

function showForm() {
    document.querySelector("fom-wrapper .card")
}

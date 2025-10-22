import { loginPageAnimation } from "./loginGSAP.js";

window.addEventListener("load", () => {
    document.body.querySelector(".loader-class").style.display = "none";
    document.body.querySelector(".overall").style.display = "block";

    // Calling Animation
    loginPageAnimation();
});
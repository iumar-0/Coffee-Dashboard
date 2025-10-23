import { loginPageAnimation } from "./loginGSAP.js";

// Body control
window.addEventListener("load", () => {
    gsap.from("body", {
        opacity: 0,
        duration: 4,
        ease: "back",
        backgroundColor: "black",
    })
})
// Loading Animation
window.addEventListener("load", () => {
    document.body.querySelector(".loader-class").style.display = "none";
    document.body.querySelector(".overall").style.display = "block";

    // Calling Animation
    loginPageAnimation();
});

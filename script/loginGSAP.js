export function loginPageAnimation() {
    gsap.from(".img-beans ", {
        x: -200,
        duration: 3,
        opacity: 1,
        onComplete: () => {
            console.log("finshed first");
        }
    });
    gsap.from(".img-beans-right", {
        x: 200,
        duration: 3,
        opacity: 1,
        onComplete: () => {
            console.log("finshed second")
        }
    })
}
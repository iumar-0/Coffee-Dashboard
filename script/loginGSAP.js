export function loginPageAnimation() {

    const timeline = gsap.timeline();

    timeline.from(".coffee-land-heading ", {
        y: -100,
        duration: 2,
        opacity: 0,
        ease: "expo.out",
        onComplete: () => {
            console.log("Cup animation complted");
        }
    })
    timeline.from(".id-coffe-land", {
        y: -100,
        duration: 0.5,
        opacity: 0,
        ease: "expo.out",
        onComplete: () => {
            console.log("Cup animation complted");
        }
    })
    timeline.from(".coffe-cup-image", {
        y: -250,
        duration: 2.5,
        opacity: 0,
        ease: "back.out(1.7)",
        onComplete: () => {
            console.log("Cup animation complted");
        }
    })

    timeline.from(".img-beans ", {
        x: -200,
        duration: 3,
        opacity: 0,
        ease: "back.out(1.7)",
        onComplete: () => {
            console.log("finshed first");
        }
    }, 2.5);
    timeline.from(".img-beans-right", {
        x: 200,
        ease: "back.out(1.7)",
        duration: 3,
        opacity: 0,
        onComplete: () => {
            console.log("finshed second")
        }
    }, 2.5);
};
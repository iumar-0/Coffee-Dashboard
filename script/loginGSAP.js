export function loginPageAnimation() {

    const timeline = gsap.timeline();

    timeline.from(".coffee-land-heading ", {
        y: -100,
        duration: 1.5,
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
        ease: "back.out(1.7)",
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
    }, 2.5).from(".img-beans-right", {
        x: 200,
        ease: "back.out(1.7)",
        duration: 3,
        opacity: 0,
        onComplete: () => {
            console.log("finshed second")
        }
    }, 2.5);

    // Repeated Animation of Beans

    // timeline.to(".img-beans", {
    //     x:"1px",              // move 100px to the right
    //     duration: 1,         // 1 second forward
    //     yoyo: true,          // go back to start automatically
    //     repeat: -1,          // infinite loop
    //     ease: "power1.inOut" // smooth easing both ways
    // },4).to(".img-beans-right", {
    //     x: "1px",              // move 100px to the right
    //     duration: 1,         // 1 second forward
    //     yoyo: true,          // go back to start automatically
    //     repeat: -1,          // infinite loop
    //     ease: "power1.inOut" // smooth easing both ways
    // },4)
};

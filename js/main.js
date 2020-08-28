const hamburger = document.querySelector(".header-shop-link");
const container = document.querySelector(".container");
const close = document.querySelector(".shopping-list-header-close");
const header = document.querySelector("header");
const shopnow = document.querySelector(".shop-now");
const form = document.querySelector(".height");

const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".shopping-list", 1.2, {
  transform: "translateX(0)",
  ease: Power3.easeOut,
})
  .to("html", 0.1, {
    overflowY: "auto",
  })
  .to("body", 0.1, {
    overflowY: "auto",
  })
  .to(".container", 0.1, {
    pointerEvents: "none",
  })
  .to(".height", 0.2, {
    top: "0",
    ease: Power2.easeOut,
  });

hamburger.addEventListener("click", () => {
  tl.play();
});

close.addEventListener("click", () => {
  tl.reversed();
  tl.reverse();
});

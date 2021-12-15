document.addEventListener("contextmenu", function (fahim) {
  fahim.preventDefault();
});

document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
};

let clickedElement = document.querySelector(".disabled");
clickedElement.addEventListener("click", () => {
  clickedElement.innerHTML = "Not ready!";
  clickedElement.style.cssText = "display: grid;place-content: center;height: 7vh;width: 13vw;border-radius: 50px;background-color: var(--cb3);color: var(--cw6);font-weight: 400;border: 2.5px transparent;border-radius: 50px;cursor: pointer;width:100%";
}
)

window.onload = function () {
  document.documentElement.classList.add('show-time');
};
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute('aria-expanded', false);
  };
}
);

let builtBy = document.querySelector('.built-by');
let codeCounter = document.querySelector('.codeCounter');
let heart = document.querySelector('.fa-heart');
let blue = document.querySelector('.blue');

codeCounter.innerHTML = 478+698+330+47;
builtBy.addEventListener('mouseover',()=>{
  codeCounter.style.cssText = "text-shadow:0px 0px 2em var(--cr);";
  heart.style.cssText = "filter:drop-shadow(0px 0px 1em var(--cr));";
  blue.style.cssText = "filter:drop-shadow(0px 0px 1em var(--c10lv));";
})
builtBy.addEventListener('mouseout',()=>{
  codeCounter.style.cssText = "text-shadow:0px 0px 0em var(--cr);filter:drop-shadow(0px 0px 0em var(--c10lv));";
  heart.style.cssText = "filter:drop-shadow(0px 0px 0em var(--cr));";
  blue.style.cssText = "filter:drop-shadow(0px 0px 0em var(--c10lv));";
})



/*  display: grid;
place-content: center;
height: 7vh;
width: 13vw;
border-radius: 50px;
background-color: var(--cb3);
color: var(--cw6);
font-weight: 400;
border: 2.5px transparent;
border-radius: 50px;

cursor: pointer; */
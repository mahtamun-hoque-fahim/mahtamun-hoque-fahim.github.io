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

window.onload = function() {
  document.documentElement.classList.add('show-time');
};


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
const element = document.getElementById("text");
let state = "goIn";

let moveInClass = "animate__fadeInLeft";
let moveOutClass = "animate__fadeOutRight";

let contentList = ["I'm a front-end developer that","Eagers to learn", "Always adapts", "Never give up"];
let currIndex = 0;
element.innerHTML = contentList[currIndex % contentList.length];

element.classList.add("animate__animated");
element.classList.add(moveInClass);
element.classList.remove(moveOutClass);
element.style.setProperty('--animate-duration', '1.5s');

element.addEventListener("animationend", () => {
  if (state === "goIn") {
    element.classList.remove(moveInClass);
    element.classList.add(moveOutClass);
    state = "goOut";
    currIndex++;
  } else {
    element.classList.add(moveInClass);
    element.classList.remove(moveOutClass);
    state = "goIn";
    element.innerHTML = contentList[currIndex % contentList.length];
  }
});

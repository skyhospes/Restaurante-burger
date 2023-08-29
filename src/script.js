function E(selector, paret) {
  if (selector instanceof HTMLElement) 
    return selector;

  return (paret || document).querySelectorAll(selector);
}

function hasClass (element, className) {
  return element.classList.contains(className);
}

function radioClass (element, className) {
  E("." + className).forEach(e =>
  e.classList.remove(className));
  element.classList.toggle(className);
}

function tabs(nav) {
  let navElement = E(nav)[0];

  navElement.addEventListener("click", (e) => {
    let target = e.target;

    if (hasClass(target, "tab")) 
      radioClass(target, "active");

    let linkedTab = E("." + target.id)[0];

    radioClass(linkedTab, "visible");
  });

  let active = E(".tab.active")[0];
  if (active) 
    radioClass(E("." + active.id)[0], "visible");
}

tabs(".menu-nav");

//cargando mas

let loadMoreBtn1 = document.querySelector("#load-more-1");
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-1 .box-1")];
  for (let i = currentItem1; i < currentItem1 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem1 += 4;
  if (currentItem1 >= boxes.length) {
    loadMoreBtn1.style.display = "none";
  }
}

let loadMoreBtn2 = document.querySelector("#load-more-2");
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-2 .box-2")];
  for (let i = currentItem2; i < currentItem2 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem2 += 4;
  if (currentItem2 >= boxes.length) {
    loadMoreBtn2.style.display = "none";
  }
}

let loadMoreBtn3 = document.querySelector("#load-more-3");
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
  let boxes = [...document.querySelectorAll(".box-container-3 .box-3")];
  for (let i = currentItem3; i < currentItem3 + 4; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem3 += 4;
  if (currentItem3 >= boxes.length) {
    loadMoreBtn3.style.display = "none";
  }
}

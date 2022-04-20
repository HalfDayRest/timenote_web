import "./style.scss";
import "./rem";

window.addEventListener("scroll", handleScroll, true);

let i = 0;
let currMenu = 0;
let head = document.getElementById("head");
let menus = document.getElementById("menus");

let headEl = document.getElementById("timenote-top");
let timenoteDesignEl = document.getElementById("timenote-design");
let timenoteFeaturesEl = document.getElementById("timenote-features");
let timenoteDownloadEl = document.getElementById("timenote-download");
let feedbackEl = document.getElementById("feedback");

function handleScroll() {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  var scroll = scrollTop - i;
  i = scrollTop;
  if (Math.abs(scroll) >= 50) {
    if (scroll < 0) {
      head?.classList.remove("head-down");
      head?.classList.add("head-up");
    } else {
      head?.classList.add("head-down");
      head?.classList.remove("head-up");
    }
  }

  if (checkVisibleToTop(headEl as HTMLElement)) {
    selectMenu(0);
  }
  if (checkVisibleToTop(timenoteDesignEl as HTMLElement)) {
    selectMenu(1);
  }
  if (checkVisibleToTop(timenoteFeaturesEl as HTMLElement)) {
    selectMenu(2);
  }
  if (checkVisibleToTop(timenoteDownloadEl as HTMLElement)) {
    selectMenu(3);
  }
  if (checkVisibleToTop(feedbackEl as HTMLElement)) {
    selectMenu(4);
  }
}

function selectMenu(pos: number) {
  if (currMenu === pos) return;
  currMenu = pos;
  let childens = menus?.children;
  for (let i = 0; i < 5; i++) {
    childens![i].classList.remove("menu-select");
  }
  menus?.children[pos].classList.add("menu-select");
}

function checkVisibleToTop(elm: HTMLElement) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= -viewHeight + 200);
}

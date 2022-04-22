import "./style.scss";
import "./rem";

window.addEventListener("scroll", handleScroll, true);

let i = 0;
let currMenu = 0;
let head = document.getElementById("head");
let menus = document.getElementById("menus");
let barMenus = document.getElementById("bar-menus");

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
      head?.classList.remove("down");
      head?.classList.add("up");
    } else {
      head?.classList.add("down");
      head?.classList.remove("up");
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
  let childrens = menus?.children;
  let childrens2 = barMenus?.children;
  for (let i = 0; i < 5; i++) {
    childrens![i].classList.remove("menu-select");
    childrens2![i].classList.remove("menu-select");
  }
  menus?.children[pos].classList.add("menu-select");
  barMenus?.children[pos].classList.add("menu-select");
}

function checkVisibleToTop(elm: HTMLElement) {
  var rect = elm.getBoundingClientRect();
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  );
  return !(rect.bottom < 0 || rect.top - viewHeight >= -viewHeight + 200);
}

window.onload = function () {
  let downloadPlatformEl = document.getElementById(
    "platform-version"
  ) as HTMLElement;
  switch (getSystemName()) {
    case "windows":
      downloadPlatformEl.innerHTML = "下载 Windows 版";
      break;
    case "mac":
      downloadPlatformEl.innerHTML = "下载 Mac 版";
      break;
    case "linux":
      downloadPlatformEl.innerHTML = "下载 Linux 版";
      break;
    case "android":
      downloadPlatformEl.innerHTML = "下载 Android 版";
      break;
    default:
      downloadPlatformEl.innerHTML = "下载 Windows 版";
  }

  document.getElementById("bar-menus-btn")!.onclick = function () {
    document.getElementById("bar-menus")?.classList.toggle("show");
  };
};

function getSystemName(): string {
  let userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf("android") != -1) {
    return "android";
  }
  if (userAgent.indexOf("windows") != -1) {
    return "windows";
  }
  if (userAgent.indexOf("macintosh") != -1) {
    return "mac";
  }
  if (userAgent.indexOf("linux") != -1) {
    return "linux";
  }
  return "windows";
}

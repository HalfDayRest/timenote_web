function setRem() {
  let desingWidth = 1920;
  let desingHeight = 1080;
  let baseSize = 100;
  let basePc = baseSize / desingWidth;
  let vW = window.innerWidth;
  let vH = window.innerHeight;
  let dueH = (vW * desingHeight) / desingWidth;
  if (vH < dueH) {
    vW = (vH * desingWidth) / desingHeight;
  }
  if (vW < 1300) {
    vW = 1300;
  }
  let rem = vW * basePc;
  document.documentElement.style.fontSize = rem + "px";
}
setRem();
window.onresize = function () {
  setRem();
};

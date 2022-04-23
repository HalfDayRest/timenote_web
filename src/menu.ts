import { addLoadEvent } from './util'

window.addEventListener('scroll', handleScroll, true)

let i = 0
let currMenu = 0
let head = document.getElementById('head')
let menus = document.getElementById('menus')
let barMenus = document.getElementById('bar-menus')

let headEl = document.getElementById('timenote-top')
let timenoteDesignEl = document.getElementById('timenote-design')
let timenoteFeaturesEl = document.getElementById('timenote-features')
let timenoteDownloadEl = document.getElementById('timenote-download')
let feedbackEl = document.getElementById('feedback')

addLoadEvent(function () {
  menus?.children[0].classList.toggle('select')
  barMenus?.children[0].classList.toggle('select')
})

function handleScroll() {
  var scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop
  var scroll = scrollTop - i
  i = scrollTop
  if (Math.abs(scroll) >= 50) {
    if (scroll < 0) {
      head?.classList.remove('down')
      head?.classList.add('up')
    } else {
      head?.classList.add('down')
      head?.classList.remove('up')
    }
  }

  if (checkVisibleToTop(headEl as HTMLElement)) {
    selectMenu(0)
  }
  if (checkVisibleToTop(timenoteDesignEl as HTMLElement)) {
    selectMenu(1)
  }
  if (checkVisibleToTop(timenoteFeaturesEl as HTMLElement)) {
    selectMenu(2)
  }
  if (checkVisibleToTop(timenoteDownloadEl as HTMLElement)) {
    selectMenu(3)
  }
  if (checkVisibleToTop(feedbackEl as HTMLElement)) {
    selectMenu(4)
  }
}

function selectMenu(pos: number) {
  if (currMenu === pos) return
  currMenu = pos
  let childrens = menus?.children
  let childrens2 = barMenus?.children
  for (let i = 0; i < 5; i++) {
    childrens![i].classList.remove('select')
    childrens2![i].classList.remove('select')
  }
  menus?.children[pos].classList.toggle('select')
  barMenus?.children[pos].classList.toggle('select')
}

function checkVisibleToTop(elm: HTMLElement) {
  var rect = elm.getBoundingClientRect()
  var viewHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight
  )
  return !(rect.bottom < 0 || rect.top - viewHeight >= -viewHeight + 200)
}

window.onclick = function (e) {
  let barBtn = document.getElementById('bar-menus-btn')
  let icon = document.querySelector('.fa-solid')
  if (e.target != barBtn && e.target != icon) {
    document.getElementById('bar-menus')?.classList.remove('show')
  }
}

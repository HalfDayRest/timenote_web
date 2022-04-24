import './menu'
import './style.scss'
import './rem'
import 'animate.css'
import { addLoadEvent } from './util'
import VanillaTilt from 'vanilla-tilt'
import ScrollReveal from 'scrollreveal'

VanillaTilt.init(document.querySelectorAll('.card-div') as any, {
  max: 1,
  speed: 300,
})

ScrollReveal({
  scale: 0.85,
  duration: 500,
}).reveal('.card-div')

ScrollReveal({
  scale: 0.85,
  duration: 500,
}).reveal('.features-div')

ScrollReveal({
  scale: 0.85,
  duration: 500,
}).reveal('.download-card')

addLoadEvent(function () {
  let downloadPlatformEl = document.getElementById(
    'platform-version'
  ) as HTMLElement
  switch (getSystemName()) {
    case 'windows':
      downloadPlatformEl.innerHTML = '下载 Windows 版'
      break
    case 'mac':
      downloadPlatformEl.innerHTML = '下载 Mac 版'
      break
    case 'linux':
      downloadPlatformEl.innerHTML = '下载 Linux 版'
      break
    case 'android':
      downloadPlatformEl.innerHTML = '下载 Android 版'
      break
    default:
      downloadPlatformEl.innerHTML = '下载 Windows 版'
  }

  document.getElementById('bar-menus-btn')!.onclick = function () {
    document.getElementById('bar-menus')?.classList.toggle('show')
  }
})

function getSystemName(): string {
  let userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('android') != -1) {
    return 'android'
  }
  if (userAgent.indexOf('windows') != -1) {
    return 'windows'
  }
  if (userAgent.indexOf('macintosh') != -1) {
    return 'mac'
  }
  if (userAgent.indexOf('linux') != -1) {
    return 'linux'
  }
  return 'windows'
}

import './menu'
import './style.scss'
import './rem'
import './downloads'
import 'animate.css'
import { addLoadEvent } from './util'

addLoadEvent(function () {
  let downloadPlatformEl = document.getElementById(
    'platform-version'
  ) as HTMLElement
  switch (getSystemName()) {
    case 'windows':
      downloadPlatformEl.innerHTML = '下载 Windows 版'
      break
    case 'mac':
      downloadPlatformEl.innerHTML = '下载 macOS 版'
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
  return 'windows'
}

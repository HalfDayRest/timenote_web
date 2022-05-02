let windowsDownloadEL = document.getElementById('windows-version')
let androidDownloadEl = document.getElementById('android-version')
let macDownloadEl = document.getElementById('mac-version')
let platformDownloadEl = document.getElementById('platform-version')

let dialogsEL = document.getElementById('dialogs')
let testVersionDialogEl = document.getElementById('dialog-test-version')
let dialogButtonEl = document.getElementById('close-test-version')

function windowsDownload() {
  showTestVersionDialog(() => {
    window.open(import.meta.env.VITE_WINDOWS_DOWNLOAD_LINK, '_blank')
  })
}

function androidDownload() {
  window.open(import.meta.env.VITE_ANDROID_DOWNLOAD_LINK, '_blank')
}

function macDownload() {
  showTestVersionDialog(() => {
    window.open(import.meta.env.VITE_MACOS_DOWNLOAD_LINK, '_blank')
  })
}

windowsDownloadEL!.onclick = windowsDownload

androidDownloadEl!.onclick = androidDownload

macDownloadEl!.onclick = macDownload

platformDownloadEl!.onclick = function () {
  let platform = platformDownloadEl?.innerText.toLowerCase()
  if (platform?.includes('windows')) {
    windowsDownload()
  } else if (platform?.includes('mac')) {
    macDownload()
  } else if (platform?.includes('android')) {
    androidDownload()
  }
}

function showTestVersionDialog(callback: Function) {
  dialogsEL?.classList.toggle('show')
  testVersionDialogEl?.classList.toggle('show')
  dialogButtonEl!.onclick = () => {
    dialogsEL?.classList.toggle('show')
    testVersionDialogEl?.classList.toggle('show')
    callback()
  }
}

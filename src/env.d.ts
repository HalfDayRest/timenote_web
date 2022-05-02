interface ImportMetaEnv {
  readonly VITE_WINDOWS_DOWNLOAD_LINK: string
  readonly VITE_ANDROID_DOWNLOAD_LINK: string
  readonly VITE_MACOS_DOWNLOAD_LINK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

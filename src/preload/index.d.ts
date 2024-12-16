export interface IElectronAPI {
  // loadPreferences: () => Promise<void>,
  minimizeWindow: VoidFunction
  closeWindow: VoidFunction
}

declare global {
  interface Window {
    electron: IElectronAPI
    api: unknown
  }
}

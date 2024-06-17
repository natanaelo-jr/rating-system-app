import { IpcRenderer } from 'electron'

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
  }
}

export function sendIpc(channel: string, ...args: any[]): void {
  window.ipcRenderer.send(channel, ...args)
}

export function onceIpc(
  channel: string,
  listener: (event: any, ...args: any[]) => void,
): void {
  window.ipcRenderer.once(channel, listener)
}

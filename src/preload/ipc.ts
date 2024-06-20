import { IpcRenderer } from 'electron'

declare global {
  interface Window {
    ipcRenderer: IpcRenderer
  }
}

export function sendIpc(channel: string, ...args: unknown[]): void {
  window.ipcRenderer.send(channel, ...args)
}

export function onceIpc(
  channel: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  listener: (event: any, ...args: any[]) => void,
): void {
  window.ipcRenderer.once(channel, listener)
}

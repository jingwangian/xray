/**
 * The function is used to send the msg and image url to the electron windows
 *
 * @export
 * @param {string} msg : The message to send
 * @param {(string|null)} [url] : The image url
 */
export function sendMessage(msg:string, url?:string|null){
    if (process.env.REACT_APP_NOTIFICATION){
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send(msg, url);  
    }
  };

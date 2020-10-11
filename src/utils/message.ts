export function sendMessage(msg:string, url?:string|null){
    if (process.env.REACT_APP_NOTIFICATION){
      const { ipcRenderer } = window.require('electron');
      ipcRenderer.send(msg, url);  
    }
  };

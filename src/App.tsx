import React from 'react';
import './App.css';
import LogoBar from './components/LogoBar';
import ImageUpload from './components/ImageUpload';
import {sendMessage} from './utils/message';

function App() {
  return (
    <div className="App">
      <LogoBar></LogoBar>
      <ImageUpload sendMessage={sendMessage}></ImageUpload>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Game from './game';

function App() {
  const [showImage, setShowImage] = useState(false);
  return (
    <div>
      {
        showImage ? <Game />  : <img onClick={() => setShowImage(!showImage)} className="myimage" src="https://www.addictinggames.com/sites/default/files/styles/homepage_views_style/public/fast-arrow.jpg" alt=""  /> 
      }
        
    </div>
    
  );
}

export default App;

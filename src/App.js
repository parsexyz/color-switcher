import React, { useState } from 'react';
import './App.css';
import ColorButton from './ColorButton';
import LogRocket from 'logrocket';

function App() {
  LogRocket.init('gdo7ab/5g-challenge');
  LogRocket.identify('parsedata', {
    name: 'Jay Fallah',
    email: 'jay.fallah@parsedata.xyz',
  });
  const [color, setColor] = useState('aqua')
  console.log(color);
  return (
    <div className={'react-root ' + color}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorButton color='red' setColor={setColor}/>
        <ColorButton color='blue' setColor={setColor}/>
        <ColorButton color='yellow' setColor={setColor}/>
        {/* <button className='red' onClick={()=>setColor('red')}>red</button>
        <button className='blue' onClick={()=>setColor('blue')}>blue</button>
        <button className='yellow' onClick={()=>setColor('yellow')}>yellow</button> */}
      </div>
    </div>
  );
}

export default App;

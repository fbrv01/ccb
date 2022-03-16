import React, { useState } from 'react';
import Huhu from './components/Huhu';
import ColorPalette from './components/ColorPalette';
import "./scss/main.scss";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('colors')) || Array(11).fill('white')
  const [fillColors, setFillColors] = useState(initialState)
  const [currentColor, setCurrentColor] = useState('gold')
  const reset = () => localStorage.clear() || setFillColors(Array(11).fill('white'))
  
  // reset might be also done with localStorage.removeItem('colors') or JSON.parse(localStorage.removeItem('colors'))

  // setCurrentColor function allows currentColor to update becouse we want to paint with multiple colors
  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    localStorage.setItem('colors', JSON.stringify(newFillColors))
    setFillColors(newFillColors)
  }
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <h2>Cosmas's Coloring Book</h2>
      <div className= "Huhu">
        <Huhu fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <>
      <button class="button" onClick={reset}>reset</button>
    </>
    </div>
  )
}
export default App
import React, { useState } from 'react'
import Huhu from './components/Huhu'
import ColorPalette from './components/ColorPalette'
import "./scss/main.scss"

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('colors')) || Array(11).fill('white')
  const [fillColors, setFillColors] = useState(initialState)
  const [currentColor, setCurrentColor] = useState('gold')

  // setCurrentColor function allows currentColor to update becouse we want to paint with multiple colors
  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
    localStorage.setItem('colors', JSON.stringify(newFillColors))
    setFillColors(newFillColors)
  }

  return (
    <div className="App">
      <div className= "Huhu">
        <Huhu fillColors={fillColors} onFill={onFillColor} />
      </div>
      <ColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  )
}
export default App
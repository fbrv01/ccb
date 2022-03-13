import React, { useState } from 'react'
import './App.css'
import Huhu from './components/Huhu'
import ColorPalette from './components/ColorPalette'

const App = () => {
  const [fillColors, setFillColors] = useState(Array(11).fill('white'))
  const [currentColor, setCurrentColor] = useState('gold')

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0)
    newFillColors[i] = currentColor
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
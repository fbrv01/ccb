import React from 'react'

export default function ColorPalette(props) {

    const colors = ['#FF0009', '#FFAE00', '#FFF9ED', '#FF5EFC', '#2EE5F2', '#B6BA9E', '#C1CF74', '#616160', '#545938']

    // div maps through colors array and creates fic for each on them with an onClick event to change the currentColor to clicked color.
    return(
        <div className="color-palette">
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? 'color-swatch-active' : '';
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}
import React, {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState()
    function handleColor(event) {
        setColor(event.target.value)
    }
    const body = document.body
    body.style.backgroundColor = color

    return (
        <>
        <input type="color" onChange={handleColor} value={color}/>
        <p>{color}</p>
        </>
    )
}

export default ColorPicker;

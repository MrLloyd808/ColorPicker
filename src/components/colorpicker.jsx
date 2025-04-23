import React, {useState} from "react";

function ColorPicker() {
    const [color, setColor] = useState('#213448')
    function handleColor(event) {
        setColor(event.target.value)
        localStorage.setItem('bgColor', event.target.value)
    }
    const body = document.body
    body.style.backgroundColor = color

    return (
        <div id="wrapper">
        <p id="value-text">{color}</p>
        <input type="color" onChange={handleColor} />
        </div>
    )
}

export default ColorPicker;

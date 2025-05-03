import React, {useState, useEffect} from "react";

function ColorPicker() {
    const [color, setColor] = useState('#030202')
    function handleColor(event) {
        setColor(event.target.value)
        localStorage.setItem('bgColor', event.target.value)
    }

    useEffect(() => {
        document.title = `Current Color: ${color}`
    }, [color])

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

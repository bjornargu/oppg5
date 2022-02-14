// import { useState } from "react";

export default function Alert({ inputValue, handleInput, handleClick }) {
    // const [value, setValue] = useState("Skriv her");
    // const handleClick = () => {alert(inputValue)};
    // const handleChange = (e) => {setValue(e.currentTarget.value)};


    return(
    <>
        <button onClick={handleClick}>Button</button>
        <input type="text" onChange={handleInput} value={inputValue} />
    </>
    )
}


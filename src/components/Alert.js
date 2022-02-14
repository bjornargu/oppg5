import { useState } from "react";

export default function Alert() {
    const [value, setValue] = useState("default");
    const handleClick = () => {alert(value)};
    const handleChange = (e) => {setValue(e.currentTarget.value)};


    return(
    <>
        <button onClick={handleClick}>Button</button>
        <input type="text" onChange={handleChange} />
    </>
    )
}


  
  


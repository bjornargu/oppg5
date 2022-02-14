import { useState } from "react";
import Alert from "./components/Alert";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";



const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [click, setClick] = useState(false);
  const handleInput = (e) => {setInputValue(e.target.value)}
  const handleClick = () => {setClick(!click)}


return(  
  <div>
    <p>Read the README.md to see the tasks</p>
    <Wrapper>
      <MyComponent title="It works"/>
    </Wrapper>
    <Food food={['Pizza', 'Hamburger', 'Coke']} />
    <Alert inputValue={inputValue} handleInput={handleInput} handleClick={handleClick} />
    <p>{click ? inputValue : null}</p>
    {console.log(click)}
  </div>

  )
}

export default App;


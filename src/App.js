import { useState } from "react";
import Alert from "./components/Alert";
import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";



const App = () => {
  // const [inputValue, setInputValue] = useState('')

return(  
  <div>
    <p>Read the README.md to see the tasks</p>
    <Wrapper>
      <MyComponent title="It works"/>
    </Wrapper>
    <Food food={['Pizza', 'Hamburger', 'Coke']} />
    <Alert />
    {/* <p>{inputValue}</p> */}
  </div>

  )
}

export default App;


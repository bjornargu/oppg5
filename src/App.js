import Food from "./components/Food";
import MyComponent from "./components/MyComponent";
import Wrapper from "./components/Wrapper";

const handleClick = () => {console.log("Clicked")};
const handleChange = () => {console.log("Changed")};



const App = () => (
  <div>
    <p>Read the README.md to see the tasks</p>
    <Wrapper>
      <MyComponent title="It works"/>
    </Wrapper>
    <Food food={['Pizza', 'Hamburger', 'Coke']} />
    <button onClick={handleClick}>Button</button>
    <input type="text" onChange={handleChange} />
  </div>

);

export default App;

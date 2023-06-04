import React, {useState} from "react"; // The purpose of State in react is as a variable in Js, To change the value of variable we use "setState"
// we are importing useState from react library and we are using curly braces "{}" for useState bcz it is not default export
// As we are using export default for "App" component so we don't use curly braces "{}" for importing in "index.js"
// The 1 thing is to remember that we can use export default only for 1 time for a component in one file

function App() {
  let [count, setCount] = useState(0) // useState is a Hook, and we can use in functional component we can't use in class component
  return (
    <div>
      <h3>Vale of counter variable is: {count}</h3>  {/*when we use variable in JSX we use curly braces "{}"around the variable */ }
      <br />
      <button onClick={
        ()=> setCount(count++)
        }>Update Counter</button>
      </div>
  );
}

export default App;

// 01:02 video watched

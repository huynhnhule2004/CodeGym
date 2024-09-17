import { Content } from "./Content";
import { DemoInput } from "./DemoInput";
import { Exercise } from "./Exercise";

function App() { //Function Component
  let count = 0;
  return (
    <div> 
      {/* <Content></Content> */}
      <Exercise/>
    </div>
  );
}


export default App;
import { useState } from "react";
import { Content } from "./Content";
import { DemoEx } from "./DemoEx";
import { DemoInput } from "./DemoInput";
import { DemoProp } from "./DemoProp";
import { LifeCycle } from "./LifeCycle";
import { Ex2 } from "./Ex2";

function App() { //Function Component
  // let count = 0;
  // return (
  //   <div>
  //     {/* <Content></Content> */}
  //     {/* <DemoInput/> */}
  //     {/* <DemoEx/> */}
  //     {/* <DemoProp name="Linh" age="22"/> */}
  //   </div>
  // );

  // let [isShow, setIsShow] = useState(false);
  // return (
  //   <>
  //     {isShow ? <LifeCycle></LifeCycle> : ''}
  //     <button onClick={() => {
  //       setIsShow(!isShow)
  //     }}>Nhấn</button>
  //   </>
  // )
  return (
    <>
      <Ex2 />
    </>
  )
}


export default App;
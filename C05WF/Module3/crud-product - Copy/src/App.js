import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { List } from "./components/List";
import { Add } from "./components/Add";
import { Edit } from "./components/Edit";
import { Detail } from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="home" element={<Home/>}>
          <Route path="list" element={<List/>}/>
          <Route path="add" element={<Add/>}/>
          <Route path="edit/:id" element={<Edit/>}/>
          <Route path="detail/:id" element={<Detail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./components/products/partial/Main";
import { List } from "./components/products/compponent/List";
import { Add } from "./components/products/compponent/Add";
import { Edit } from "./components/products/compponent/Edit";
import { Login } from "./components/users/Login";
import { Register } from "./components/users/Register";


function App() {

  const token = localStorage.getItem("token")//lấy ngay khi chạy chương trình -> đăng nhập xong token mới sinh ra
  //=> null
  return (
    <>
      <Routes>
        {
          token ?
            <>
              <Route element={<Main />} path="">
                <Route element={<List />} path="home" />
                <Route element={<Add />} path="add" />
                <Route element={<Edit />} path="edit/:id" />
                <Route element={<Navigate to="/home" replace />} path="*" />
              </Route>
            </>
            :
            <>
              <Route element={<Login />} path="login" />
              <Route element={<Register />} path="register" />
              <Route element={<Navigate to="/login" replace />} path="*" />
            </>
        }

      </Routes>
    </>
  );
}

export default App;

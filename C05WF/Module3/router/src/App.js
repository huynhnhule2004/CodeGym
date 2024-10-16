import { Route, Routes } from "react-router-dom";
import { Add } from "./Add";
import { Home } from "./Home";
import { Edit } from "./Edit";
import { Blog } from "./Blog";
import { Category } from "./Category";
import { Product } from "./Product";



function App() {
  return (
    <>
      <Routes>

        <Route path="/home" element={<Home />} >
          <Route path="product" element={<Product />} />
          <Route path="category" element={<Category />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/category" element={<Category />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id/:classId" element={<Edit />} />

      </Routes>
    </>
  )
}

export default App;


// Luyện tập lại router cơ bản
// Tìm hiểu về <Outlet> của react router
// Buổi sau: CRUD hoàn chỉnh có chia router và tương tác với API
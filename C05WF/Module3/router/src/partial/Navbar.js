import { Link } from "react-router-dom";

export function Navbar() {
    return (

        <>
            <h1>Đây là trang Navbar</h1>
            <Link to="/home/product">Product</Link>
            <Link to="/home/category">Category</Link>
            <Link to="/home/blog">Blog</Link>

            <hr></hr>
        </>
    )
}
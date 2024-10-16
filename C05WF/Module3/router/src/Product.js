import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { Navbar } from "./partial/Navbar"
import { Footer } from "./partial/Footer"
import { Add } from "./Add";


export function Product() {
    return (
        <>
            <Link to={"add"}>add Product</Link>
            <Link to={"edit"}>edit</Link>

            <h1>Day la Product</h1>
        </>
    )
}
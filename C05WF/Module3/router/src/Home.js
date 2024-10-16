import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";
import { Navbar } from "./partial/Navbar"
import { Footer } from "./partial/Footer"
import { Add } from "./Add";
import { Product } from "./Product";


export function Home() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}
import "../css/Home.css";
import { Outlet } from "react-router-dom";
import { Footer } from "../partial/Footer";
import { Header } from "../partial/Header";

export function Home() {
    return (
        <>

            <div className="container">
                <Header />
                <div className="main">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}
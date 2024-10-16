import { Link } from "react-router-dom";
import "../css/Header.css";

export function Header() {
    return (
        <>
            <div className="header">
                <Link to="/home/list">Trang chủ</Link>
                <Link to="/home/add">Add</Link>
            </div>
        </>
    )
}
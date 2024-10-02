import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <Link to="/home/list">Trang chủ</Link>
            <Link to="/home/add">Add</Link>
            <hr/>
        </>
    )
}
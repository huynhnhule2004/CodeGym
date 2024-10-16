import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
            <h1>Đây là Header</h1>
            <Link to={"/add"}>Add</Link>
            <Link to={"/home"}>Home</Link>
            <hr/>
        </>
    )


}
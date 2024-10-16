
import { Link } from "react-router-dom";

export function Header() {
    return(
        <>
            <Link to={"list"}>List</Link> | 
            <Link to={"add"}>Add</Link>
            <hr/>
        </>
    )
}
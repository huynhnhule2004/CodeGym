import { Link, useParams } from "react-router-dom";

export function Edit() {
    // let params = useParams();
    // console.log(params);
    // let id = params.id;
    // let classId = params.classId;
    // <=>
    
    let {id, classId} = useParams();
    return (
        <>
            <Link to="/home">Back</Link>
            <h1>Đây là trang edit {id} {classId}</h1>

        </>
    )
}
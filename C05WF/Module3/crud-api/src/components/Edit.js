import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function Edit() {
    const { id } = useParams();
    const [oldStudent, setOldStudent] = useState({});
    const navigate = useNavigate();

    let getOneData = () => {
        axios.get("http://localhost:3000/students/" + id).then((res) => {
            const { data } = res;
            setOldStudent(data);
        })
    }

    useEffect(() => {
        getOneData();
    }, []);


    let edit = (data) => {
        axios.put("http://localhost:3000/students/" + id, data).then(() => {
            navigate("/home/list");
        })
    }

    return (
        <>
            <h1>Edit Student</h1>
            <Formik
                initialValues={
                    oldStudent //ban đầu (render đầu) {}
                    // oldStudent có data => initialValue cập nhật thì sẽ phải thêm enableReinitialize là true
                }
                onSubmit={
                    (values) => {
                        edit(values);
                    }
                }
                enableReinitialize={true} // cho phép cập nhật lại giá trị khởi tạo: initialValues
            >
                <Form>
                    <Field name="name" type={"text"} placeholder="Name"></Field>
                    <Field name="action" type="text" placeholder="Action"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="score" type="number" placeholder="Score"></Field>
                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )
}


// get detail: Chi tiết 1 sinh 
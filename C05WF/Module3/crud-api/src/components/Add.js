import "../css/Add.css"
import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export function Add() {
    const navigate = useNavigate('')

    const add = (data) => {
        axios.post("http://localhost:3000/students", data).then(() => {
            navigate("/home/list")
        })
    }

    return (
        <>
            {/* <h1>Đây là Add</h1>
            <Formik
                initialValues={
                    {
                        name: '',
                        action: '',
                        description: '',
                        score: ''
                    }
                }
                onSubmit={
                    (value) => {
                        add(value);
                    }
                }
            >
                <Form>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <Field name="action" type="text" placeholder="Action"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="score" type="number" placeholder="Score"></Field>
                    <button>Submit</button>
                </Form>
            </Formik> */}

            <div className="add">
                <div className="title">Add Student</div>
                <Formik
                    initialValues={
                        {
                            name: '',
                            action: '',
                            description: '',
                            score: ''
                        }
                    }
                    onSubmit={
                        (value) => {
                            add(value);
                        }
                    }
                >
                    <Form>
                        <div className="form-data">
                            <Field name="name" type="text" placeholder="Name"></Field>
                            <Field name="action" type="text" placeholder="Action"></Field>
                            <Field name="description" type="text" placeholder="Description"></Field>
                            <Field name="score" type="number" placeholder="Score"></Field>
                            <button>Submit</button>
                        </div>
                    </Form>

                </Formik>
            </div>
        </>
    )
}

// Formik: là form sử dụng trong React
// Form: Sử dụng để nhận 1 tập dữ liệu từ người

// a => Link
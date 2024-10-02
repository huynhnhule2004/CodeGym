import axios from "axios"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Add() {
    const navigate = useNavigate('')

    const add = (data) => {
        axios.post("http://localhost:3000/products", data).then(() => {
            navigate("/home/list")
        })
    }

    return (
        <>
            <h1>Đây là Add</h1>
            <Formik
                initialValues={
                    {
                        name: '',
                        description: '',
                        img: '',
                        price: '',
                        stock: '',
                    }
                }
                onSubmit={
                    (value) => {
                        add(value);
                        console.log(value);
                        
                    }
                }
            >
                <Form>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="img" type="text" placeholder="Img"></Field>
                    <Field name="price" type="text" placeholder="Price"></Field>
                    <Field name="stock" type="text" placeholder="Stock"></Field>
                    <button>Submit</button>
                </Form>
            </Formik>
        </>
    )
}

// Formik: là form sử dụng trong React
// Form: Sử dụng để nhận 1 tập dữ liệu từ người

// a => Link
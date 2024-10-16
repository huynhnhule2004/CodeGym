import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

export function Add() {

    const navigate = useNavigate('')
    const add = (data) => {
        axios.post('http://localhost:3000/products', data).then(() => {
            navigate('/home/list')
        })
    }
    return (
        <>
            <h1>Thêm sản phẩm</h1>
            <Formik

                initialValues={
                    {
                        name: '',
                        description: '',
                        img: '',
                        price: 0,
                        stock: 0
                    }
                }

                onSubmit={
                    (value) => {
                        add(value)
                    }
                }
            >
                <Form>
                    <Field name="name" type="text" placeholder="Name"></Field>
                    <Field name="description" type="text" placeholder="Description"></Field>
                    <Field name="img" type="text" placeholder="Img"></Field>
                    <Field name="price" type="number" placeholder="Number"></Field>
                    <Field name="stock" type="number" placeholder="Stock"></Field>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    )
}
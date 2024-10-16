import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


export function Edit() {
    
    const { id } = useParams()
    const [ oldProduct, setOldProduct ] = useState([])
    const navigate = useNavigate()

    const getOneData = () => {
        axios.get('http://localhost:3000/products/' + id).then((res) => {
            let { data } = res
            setOldProduct(data)
        })
    }

    useEffect(() => {
        getOneData(id)
    },[])

    const edit = (data) => {
        axios.put('http://localhost:3000/products/' + id, data).then((res) => {
            navigate('/home/list')
        })
    }

    return (
        <>
            <h1>Sửa sản phẩm</h1>
            <Formik
                initialValues={
                    oldProduct
                }
                onSubmit={
                    (data) => {
                        edit(data)
                    }
                }
                enableReinitialize={true}
                >
                    <Form>
                        <Field name="name" type="text" placeholder="Name"/>
                        <Field name="description" type="text" placeholder="Description"/>
                        <Field name="img" type="text" placeholder="Img"/>
                        <Field name="price" type="text" placeholder="Price"/>
                        <Field name="stock" type="text" placeholder="Stock"/>
                        <button type="submit">Submit</button>
                    </Form>

            </Formik>
        </>
    )
}
import { ErrorMessage, Field, Form, Formik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";
import * as Yup from "yup"


const UserSchema = Yup.object().shape({
    username: Yup.string()
    // .min(2, 'Phai lown hon 2 ky tu')
    // .max(50, 'too long')
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email nhap dung dinh dang")
    .required('khong duoc de trong'),
    password: Yup.string().required('required')
})

export function Register() {

    const navigate = useNavigate()

    const submit = async (values) => {
        try {
            console.log("Data register", values);
            let data = await baseAxios(METHOD_HTTP.POST, "/register", values)
            console.log("Data", data);
            alert(data.message)
            navigate("/login")
        } catch (e) {
            alert(e.message);
            
        }

    }
    return (
        <>
            <h1>Đây là Register</h1>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: '',
                    }
                }

                validationSchema={UserSchema}
                
                onSubmit={submit}>

                <Form>
                    <Field name="username" type="text" placeholder="Username" />
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"username"}/></span><br/>
                    <Field name="password" type="password" placeholder="Password" />
                    <br />
                    <span style={{color: "red"}}><ErrorMessage name={"password"}/></span><br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <Link to={"/login"}>Login Now</Link >

        </>
    )


}
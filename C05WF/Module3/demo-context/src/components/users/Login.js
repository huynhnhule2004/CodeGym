import { Link, useNavigate } from "react-router-dom"
import { Field, Form, Formik } from "formik"
import baseAxios, { METHOD_HTTP } from "../../configs/baseAxios";


export function Login() {
    const navigate = useNavigate()

    const submit = async (values) => {
        try {
            console.log("Data login", values);
            let data = await baseAxios(METHOD_HTTP.POST, "/login", values)
            console.log("Data", data);
            localStorage.setItem("token", data.token)
            alert(data.message)
            navigate("/home")
        } catch (e) {
            alert(e.message);
            
        }

    }
    return (
        <>
            <h1>Đây là Login</h1>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: '',
                    }
                }
                onSubmit={submit}>

                <Form>
                    <Field name="username" type="text" placeholder="Username" />
                    <br />
                    <Field name="password" type="password" placeholder="Password" />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <Link to={"/register"}>Register Now</Link >

        </>
    )

}
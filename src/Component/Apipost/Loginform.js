import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import { Field, Formik, Form } from 'formik'
import { React } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Loginform() {

    const myNav = useNavigate()
    // const dataFetch = (e) => {
    //     let data = localStorage.getItem("user")
    //     let p = JSON.parse(data)
    //     axios.get("http://localhost:4000/accounts", {
    //         headers: {
    //             "Authorization": "Bearer " + p?.jwtToken
    //         }
    //     }).then(
    //         e => {
    //             console.log(e.data);
    //         }
    //     ).catch(
    //         y => {
    //             console.log(y);
    //         }
    //     )
    // }
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center'>Login Form</h2><hr />
            <Formik initialValues={{
                email: "",
                password: ""
            }}

                onSubmit={(e) => {
                    axios.post('http://localhost:4000/accounts/authenticate', e)
                        .then(r => {
                            console.log(r);

                            localStorage.setItem('user', JSON.stringify(r.data))
                            myNav("/form")

                        }).catch(
                            (r) => {
                                toast("Invalid username or password")
                            }
                        )
                }}
            >



                <Form className='p-4'>
                    <label>Email Address:</label>
                    <Field type='text' name='email' className='form-control' /><br />
                    <label>Password:</label>
                    <Field type='text' name='password' className='form-control' /><br />

                    <Field type='submit' value='Sign-in' className='form-control btn btn-outline-primary' />
                </Form>
            </Formik><hr />
            <div className='text-center '>

                <Link to={"/register"} >Create a new account</Link>

            </div>
            {/* <button onClick={dataFetch}>FetchData</button> */}
        </div>
    )
}



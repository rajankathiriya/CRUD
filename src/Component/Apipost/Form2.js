import React from 'react';

const Form2 = (props) => {
    return (
        <div className="m-2">
            <div className=' w-100 p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}>
                <div>
                    <table >
                        <thead>
                            <th> <td style={{ border: "none" }} >First Name </td></th>
                            <th> <td style={{ border: "none" }} >Last Name: </td></th>
                            <th> <td style={{ border: "none" }} >Email </td></th>
                            <th> <td style={{ border: "none" }} >Mobile </td></th>
                            <th> <td style={{ border: "none" }} >City </td></th>
                            <th> <td style={{ border: "none" }} >University </td></th>
                            <th> <td style={{ border: "none" }} >Edit </td></th>
                            <th> <td style={{ border: "none" }} >Delete </td></th>
                        </thead>
                        <tbody>

                            {props.mydata
                                .filter((val) => {
                                    return (
                                        val.fname.toUpperCase().indexOf(props.find.toUpperCase()) >= 0
                                    )
                                }).map((item, index) => {
                                    return (

                                        <tr>
                                            <td>{item.fname}</td>
                                            <td>{item.title}</td>
                                            <td>{item.lname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.city}</td>
                                            <td>{item.univ}</td>
                                            <td><button className='form-control btn btn-outline-success' onClick={() => { props.edit(index) }}>Edit</button><br /><br /></td>
                                            <td><button onClick={() => { props.remove(index) }} className='form-control btn btn-outline-danger' >Delete</button><br /><br /></td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>

                </div>


            </div>
        </div >
    );
}

export default Form2;


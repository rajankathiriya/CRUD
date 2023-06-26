import React, { useState } from 'react';
import HeaderAuth from './HeaderAuth';
import axios from 'axios';
import Form2 from './Form2';

const Form = () => {
    const [data1, setdata1] = useState([]);
    const dataFetch = (e) => {
        let data = localStorage.getItem("user")
        let p = JSON.parse(data)
        axios.get("http://localhost:4000/accounts", {
            headers: {
                "Authorization": "Bearer " + p?.jwtToken
            }
        }).then(
            e => {
                console.log(e.data);
            }
        ).catch(
            y => {
                console.log(y);
            }
        )
    }


    const [data, setdata] = useState([]);
    const [item, setitem] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        city: "",
        univ: ""
    });
    const [add, setadd] = useState(-1);
    const [search, setsearch] = useState('');
    // ========================Delete=======================
    const Mydelete = (index) => {
        let maindata = [...data]
        maindata.splice(index, 1)
        setdata(maindata)
    }
    // ========================Handler=======================
    const myHandler = (e) => {
        setitem({ ...item, [e.target.name]: e.target.value })
    }
    // ========================Search=======================
    const mySearch = (e) => {
        setsearch(e.target.value)
    }
    // ========================Edit=======================
    const Myedit = (index) => {
        let maindata = data[index]
        setitem(maindata);
        setadd(index);
    }
    // ========================Submit=======================
    const Mysubmit = (s) => {
        s.preventDefault();

        if (add >= 0) {
            let r = [...data]
            r[add].fname = item.fname;
            r[add].lname = item.lname;
            r[add].email = item.email;
            r[add].mobile = item.mobile;
            r[add].city = item.city;
            r[add].univ = item.univ;
            setdata(r)
        } else {
            let maindata = [...data]
            maindata.push(item)
            setdata(maindata)
        }
        setadd(-1)
    }
    return (
        <div>
            <HeaderAuth />
            <form onSubmit={Mysubmit} className='w-50 mx-auto p-4 rounded-3' style={{ backgroundColor: "rgb(206 193 193 / 41%)" }}>
                <label>First name: </label>
                <input type="text" name="fname" onChange={myHandler} className='form-control bg-white' value={item.fname} placeholder='Your first name' /><br />

                <label>Last name: </label>
                <input type="text" name="lname" onChange={myHandler} className='form-control bg-white' value={item.lname} placeholder='Your last name' /><br />

                <label>Email: </label>
                <input type="email" name="email" onChange={myHandler} className='form-control bg-white' value={item.email} placeholder='Your Email' /><br />

                <label>Mobile No: </label>
                <input type="text" name="mobile" onChange={myHandler} className='form-control bg-white' value={item.mobile} placeholder='Your Number' /><br />

                <label>City: </label>
                <input type="text" name="city" onChange={myHandler} className='form-control bg-white' value={item.city} placeholder='Your city' /><br />

                <label>University: </label>
                <input type="text" name="univ" onChange={myHandler} className='form-control bg-white' value={item.univ} placeholder='Your University' /><br />

                <input type="submit" value="Save" className='form-control btn btn-outline-primary' /><br /><br />

                <input type="text" onChange={mySearch} value={search} className='form-control bg-white' placeholder='Search Here....' />

            </form><br />
            <button onClick={dataFetch}>FetchData</button>
            {data1?.map((val) => {
                return (
                    <>
                        <h1>{val.title}</h1>
                    </>
                )
            })}

            <Form2 mydata={data} remove={Mydelete} edit={Myedit} find={search} />
        </div>
    );
}

export default Form;

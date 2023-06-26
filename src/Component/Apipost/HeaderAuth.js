import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function HeaderAuth() {
    const myNav = useNavigate()

    const myLogout = (e) => {
        localStorage.removeItem("user")
        myNav("/")

    }
    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">W3School</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-automx-3">
                            <li className="nav-item active">
                                Home
                            </li>
                            <li className='mx-3'>
                                Fashion
                            </li>
                            <li className=''>
                                Mobile
                            </li>
                            <li className='mx-3'>
                                Games
                            </li>

                        </ul>
                        <button onClick={myLogout}>Logout</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

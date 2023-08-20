import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Logout = () => {
    const userId = localStorage.getItem("userId");
    if(userId){
        // console.log(localStorage.getItem("userId"));
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
        window.location.reload();
        // console.log(localStorage.getItem("userId"));
    }
    if(userId){
        return (
            <div>
              <h1>Successfull logged out</h1>
              <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">SignUp</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }else{
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">SignUp</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Logout

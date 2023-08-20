import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from 'reactstrap'
const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  height: 200px;
`
const Home = () => {
    const userId = localStorage.getItem("userId");
    if(userId){
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/files">files</Link>
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                        </li>
                    </ul>
                </nav> 
            </div>
        )
    }else{
        return(
            <div>
                <LoginWrapper>
                    <h1>Welcome to file sharing system</h1>
                    <nav>
                        <ul>
                            <Button>
                                <Link to="/login">Login</Link>
                            </Button>
                            <Button>
                                <Link to="/register">SignUp</Link>
                            </Button>
                        </ul>
                    </nav>
                </LoginWrapper>
            </div>
        )
    }
}

export default Home

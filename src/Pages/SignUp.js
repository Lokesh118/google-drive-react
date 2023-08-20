// import { Card, CardHeader, Container, FormGroup, Input } from '@mui/material'
import React, { useState } from 'react'
import { Button, Card, CardBody, CardHeader, Container, Form, FormGroup, Input } from 'reactstrap'
import { signUp } from '../services/userService'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

const SignUp = () => {

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        reEnteredPassword:'',
    })

    const [register,setRegister] = useState({
        name:'',
        email:'',
        password:'',
    })
    // useEffect(() => {
    //     console.log(data);
    // },[data])

    const [error, setError] = useState({
        errors:{},
        isError:false
    })

    //handle change

    const handleChange = (event,property) => {
        setData({...data, [property]:event.target.value})
        // console.log(data);
    }

    const Login = () => {
        return(
            <>
                <LoginWrapper>
                    <Login/>
                </LoginWrapper>
            </>
        )
    }
    //reseting the Form
    const resetData = () => {
        setData({
            name:'',
            email:'',
            password:'',
            reEnteredPassword:'',
        })
    }

    //submitting the form
    const submitForm = (event)=>{
        event.preventDefault();
        console.log(data);
        //data validate
        if(!data.name || !data.email || !data.password || !data.reEnteredPassword){
            console.log("please check fields")
            return;
        }
        if(data.password != data.reEnteredPassword){
            console.log('passwords does not match')
            return;
        }


        const user = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        signUp(user).then((response) => {
            window.location.reload();
            // console.log(response);
            // console.log("success log");
        }).catch((error) => {
            console.log(error);
            console.log("error log");
        })
    }
    const userId = localStorage.getItem("userId");
    if(userId){
        return(
            <div>
                <h1>Please logout before signing up</h1> 
                <nav>
                    <ul>
                        <button>
                            <Link to="/files">files</Link>
                        </button>
                        <button>
                            <Link to="/logout">Logout</Link>
                        </button>
                        <button>
                            <Link to="/">Home</Link>
                        </button>
                    </ul>
                </nav> 
            </div>
        )
    }else{
        return (
            <div>
                {/* {JSON.stringify} */}
                <Container>
                    
                    <Card>
                        <CardHeader>
                            <h3>Welcome, Please Register</h3>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm}>
                                {/* Name Field */}
                                <FormGroup>
                                    <Input type = "text" 
                                    placeholder='Please enter your name' 
                                    id = "name"
                                    onChange={(e) => handleChange(e,'name')}
                                    value = {data.name}/>
                                </FormGroup>
                                {/* Email Field */}
                                <FormGroup>
                                    <Input type = "email" 
                                    placeholder='Please enter your email' 
                                    id = "email"
                                    onChange={(e) => handleChange(e,'email')}
                                    value = {data.email}/>
                                </FormGroup>
                                {/* password field */}
                                <FormGroup>
                                    <Input type = "password" 
                                    placeholder='Please enter your password' 
                                    id = "password"
                                    onChange={(e) => handleChange(e,'password')}
                                    value = {data.password}/>
                                </FormGroup>

                                {/* re enter password */}
                                <FormGroup>
                                    <Input type = "password" 
                                    placeholder='Please re-enter your password' 
                                    id = "password"
                                    onChange={(e) => handleChange(e,'reEnteredPassword')}
                                    value = {data.reEnteredPassword}/>
                                </FormGroup>

                                <Container className='text-center'>
                                    <Button color = "dark">Register</Button>
                                    <Button color = "Secondary" 
                                    type = 'reset'
                                    className='ms-2'
                                    onClick={resetData}>Reset</Button>
                                    <Button> <Link to="/login">Login</Link></Button>
                                </Container>
                            </Form>

                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default SignUp
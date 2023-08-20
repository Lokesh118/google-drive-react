import React from 'react'
import { useState } from 'react'
import {Container, Card, CardHeader, CardBody, FormGroup, Input, Form, Button} from 'reactstrap'
import { login } from '../services/userService'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState({
        errors:{},
        isError:false
    })
    const handleChange = (event,property) => {
        setData({...data, [property]:event.target.value})
        // console.log(data);
    }
    const resetData = () => {
        setData({
            email:'',
            password:''
        })
    }
    const submitForm = (event)=>{
        event.preventDefault();
        console.log(data);
        //data validate
        if(!data.email || !data.password){
            console.log("please check fields")
            return;
        }
        const user = {
            name: '',
            email: data.email,
            password: data.password
        }
        login(user).then((response) => {
            localStorage.setItem('userId',response.userId);
            localStorage.setItem('token', response.token);
            // console.log(response);
            window.location.reload();
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
            {/* <h1>Please logout before logging in again</h1> */}
            <nav>
                <ul>
                    <li>
                        <Link to="/files">files</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav> 
            </div>
        )
    }else{
        return(
            <Container>
                <Card>
                    <CardHeader>
                        <h3>Welcome, Please Login</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit = {submitForm}>
                            {/* Email Field */}
                            <FormGroup>
                                <Input type = "email" 
                                placeholder='Please Enter your Email' 
                                id = "email"
                                onChange = {(e) => handleChange(e,'email')}
                                value = {data.email}/>
                            </FormGroup>
                            {/* password field */}
                            <FormGroup>
                                <Input type = "password" 
                                placeholder='Please Enter your password' 
                                id = "password"
                                onChange = {(e) => handleChange(e,'password')}
                                value = {data.password}
                                />
                            </FormGroup>

                            <Container className='text-center'>
                                <Button color = "dark">Login</Button>
                                <Button color = "Secondary" type = 'reset'className='ms-2'>Reset</Button>
                                <Button><Link to="/register">SignUp</Link></Button>
                            </Container>
                        </Form>

                    </CardBody>
                </Card>
            </Container>
        )
    }
}

export default Login

import React, { useState } from 'react'
import { useAsyncError } from 'react-router-dom';
import {Container, Card, CardHeader, CardBody, FormGroup, Input, Form, Button} from 'reactstrap'
import { resetRequest } from '../services/userService';


const ResetRequest = () => {
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);
    const handleChange = (event) => {
        setEmail(event.target.value);
    }
    const submitForm = (event) => {
        event.preventDefault();
        if(!email){
            setMessage("empty mail Id")
            return
        }
        const params = {
            email: email
        }
        resetRequest(params).then((response) => {
            if(response.ok){
                setMessage("email sent")
                localStorage.setItem('Otp',response.data)
            }else{
                setMessage("something wrong, please try again")
            }
        }).catch((error) =>{
            setMessage("An error occurred.")
        })
    }

  return (
    <div>
        <Container>
            <Card>
                <CardHeader>
                    <h3>Welcome, Please Register</h3>
                </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm}>
                                {/* Email Field */}
                                <FormGroup>
                                    <Input type = "email" 
                                    placeholder='Please enter your email' 
                                    id = "email"
                                    onChange={(e) => handleChange(e)}
                                    value = {email}/>
                                </FormGroup>
                                <Container className='text-center'>
                                    <Button color = "dark">Request OTP</Button>
                                </Container>
                            </Form>

                        </CardBody>
                    </Card>
      </Container>
    </div>
  )
}

export default ResetRequest

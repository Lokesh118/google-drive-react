import React, { useState } from 'react'
import { resetPassword } from '../services/userService'

const PasswordReset = () => {
    const [message, setMessage] = useState(null)
    const [data,setData] = useState({
        password:'',
        reEnteredPassword:''
    })

    const handleChange = (event,property) => {
        setData({...data,[property]:event.target.value})
    }

    const submitForm = () => {
        if(data.password !== data.reEnteredPassword){
            setMessage("passwords doesn't match")
        }else if(!data.password){
            setMessage("please enter password")
        }else{
            const params = {
                email: localStorage.getItem('email'),
                password: data.password
            }
            resetPassword(params).then((response) => {
                if(response.ok){
                    setMessage("passwords reset successful")
                    localStorage.removeItem('email')
                }else{
                    setMessage("please try again")
                }
            }).catch((error) => {
                setMessage("something occured, please try again")
            })
        }
    }
    return (
        <div>
            <Container>
                <p>{message}</p>
                <Card>
                    <CardHeader>
                        <h3>Welcome, Please Register</h3>
                    </CardHeader>
                    <CardBody>
                        <Form onSubmit={submitForm}>
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
                                <Button color = "dark">Reset Password</Button>
                            </Container>
                        </Form>

                    </CardBody>
                </Card>
            </Container>
    </div>
  )
}

export default PasswordReset

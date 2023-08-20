import React, { useState } from 'react'

const ValidateOTP = () => {
    const OTP = localStorage.getItem('OTP')
    const [otp,setOtp] = useState(null);
    const [count,setCount] = useState(0);
    const [message, setMessage] = useState(null);
    const handleInputChange = (event) => {
        setOtp(event.target.value)
    }
    const submitForm = (event) => {
        event.preventDefault()
        if(otp !== OTP){
            if(count === 3){
                setMessage("Invalid OTP, otp expired")
                localStorage.removeItem('OTP')
            }else{
                setCount(count+1)
                setMessage("Incorrect OTP, retry again")
            }
        }else{
            setMessage("OTP verification success, please wait")
            localStorage.removeItem('OTP')
        }
    }
    if(!OTP){
        return (
            <p>Invalid request</p>
        )
    }
    return (
    
    <div>
        <p>{message}</p>
        <Container>
            <Card>
                <CardHeader>
                    <h3>Please Enter OTP</h3>
                </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitForm}>
                                <FormGroup>
                                    <input
                                        type="number"
                                        value={otp}
                                        onChange={handleInputChange}
                                    />
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

export default ValidateOTP

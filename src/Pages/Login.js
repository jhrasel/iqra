/* eslint-disable jsx-a11y/alt-text */
import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Login = () => {

    // Starting Code
    let [email, setEmail]       = useState("");
    let [password, setpassword] = useState("");

    // Error
    let [emailErr, setEmailErr] = useState("");
    let [passErr, setPassErr]   = useState("");
    let [showPass, setShowPass] = useState("");



    // Handle Login
    let handlelogin = () => {

        if(!email ){
            setEmailErr("Enter Your Email Address");
        }else if(!password){
            setEmailErr("");
            setPassErr("Enter Your Password");
        }else{
            setPassErr("");
        }
        
    };


    // Handle Show Pass
    let handleShowPass = () => {
        setShowPass(!showPass);
    };



    return (


        <>
        

            <section className='registration login'>

                <Grid className='d_flex' container spacing={2}>

                    {/* Left Part */}
                    <Grid item xs={6}>
                        <div className='reg_content'>

                            <div className='reg_item'>

                            <h2>Login to your account!</h2>

                            {/* Form Part */}
                            <div className='reg_form'>

                                {/* Email part */}
                                <div className='custome_input'>

                                    <TextField
                                        helperText={emailErr}
                                        id="demo-helper-text-misaligned"
                                        label="Email Address"
                                        type="email"
                                        onClick={(e)=>{setEmail(e.target.value)}}
                                    />

                                </div>

                                {/* Password part */}
                                <div className='custome_input'>

                                    <TextField
                                        helperText={passErr}
                                        id="demo-helper-text-misaligned"
                                        label="Password"
                                        type={showPass ? 'text' : 'password'}
                                        onClick={(e) => {setpassword(e.target.value)}}
                                    />

                                    {
                                        showPass
                                        ?
                                        <div onClick={handleShowPass} className='eye'><AiFillEye /></div>
                                        :
                                        <div onClick={handleShowPass} className='eye'><AiFillEyeInvisible /></div>
                                    }

                                </div>

                                {/* Submit part */}
                                <div className='custome_input'>

                                    <Button onClick={handlelogin} className='loginButton' variant="contained">Log IN</Button>

                                </div>

                            </div>

                            </div>

                        </div>
                    </Grid>

                    {/* Right Part */}
                    <Grid item xs={6}>
                        <div className='reg_img'>
                            <img src="./assets/images/login_img.png"/>
                        </div>
                    </Grid>

                </Grid>

            </section> 


        </>


    )


}

export default Login
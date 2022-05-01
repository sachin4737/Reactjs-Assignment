import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './myform.module.css'
export const Form = () => {

    const navigate = useNavigate()
    // const [userData, setUserData] = useState({
    //     email:"",
    //     password:""
    // })
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailHasError, setEmailHasError] = useState(false)
    const [passwordHasError, setPasswordHasError] = useState(false)

    const emailRegExp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"

    return (
        <>
            <div className={style.input_wrapper} >
                {/* <input type="text" placeholder="Email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} /> */}
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    className={`${style.inputField} ${emailHasError ? style.errInput : style.noerrInput}`}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (!email.match(emailRegExp)) {
                            setEmailHasError(true)
                        } else {
                            setEmailHasError(false)
                        }
                    }} />
                {
                    emailHasError && <p className={style.errMsg}>Please enter valid Email</p>
                }
            </div>
            <div className={style.input_wrapper} >
                {/* <input type="password" placeholder="Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})} /> */}
                <input
                 type="password"
                 placeholder="Password"
                 value={password}
                 className={`${style.inputField} ${passwordHasError ? style.errInput : style.noerrInput}`}
                 onChange={(e) => {
                        setPassword(e.target.value)
                        if (password.length < 6) {
                            setPasswordHasError(true)
                        }
                        else {
                            setPasswordHasError(false)
                        }

                    }} />
                {
                    passwordHasError && <p className={style.errMsg}>Password must be at least  6 characters</p>
                }

            </div>
            <div className={style.remember}>
                <p className="m-0">
                    <input type="checkbox" name="remember" />
                    <span>Remember Me</span>
                </p>
                <p className="m-0">
                    <a href="/">Forgot Password?</a>
                </p>
            </div>
            <div className={style.input_wrapper} >
                <input type="button" name="login_btn" value="login"
                    disabled={emailHasError || passwordHasError || email.length === 0 || password.length === 0}
                    onClick={() => {
                        alert(`your email is ${email}`)
                        navigate('/home')

                    }} />
            </div>
            <p className="m-0">Don't have an account <a href="/">Sign Up</a> here.</p>
        </>
    )
}
import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("")
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 letters!")
        } else {
            setFirstNameError("");
        }
    }
    // ===================================================
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 letters!")
        } else {
            setLastNameError("");
        }
    }

    // ===================================================
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 2){
            setEmailError("Email must be at least 2 letters!")
        } else {
            setEmailError("");
        }
    }
    // ===================================================
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8){
            setPasswordError("Password must be at least 8 letters!")
        } else {
            setPasswordError("");
        }
    }
    // ===================================================
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");
    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if (e.target.value !== password){
            setConfirmError("Passwords must match!")
        } else {
            setConfirmError("");
        }
    }
    // ===================================================

    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstName, lastName, email, password, confirm };
    //     console.log("Welcome", newUser);
    // };

    return (
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } />
                    {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ""
                }
                </div>
{/* ============================================================================================== */}
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } />
                    {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ""
                }
                </div>
{/* ============================================================================================== */}              
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={ handleEmail } />
                    {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ""
                }
                </div>
{/* ============================================================================================== */}
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={ handlePassword } />
                    {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ""
                }
                </div>
{/* ============================================================================================== */}
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={ handleConfirm } />
                    {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ""
                }
                </div>
{/* ============================================================================================== */}
            </form>
            <div>
                <h2>Your Form Data</h2>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm password: {confirm}</p>
            </div>
            
        </div>
    );
};

export default UserForm;

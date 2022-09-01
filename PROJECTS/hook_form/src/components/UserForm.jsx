import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirm };
        console.log("Welcome", newUser);
        return (
            <div>
                <p>First Name: {newUser.firstName}</p>
                <p>Last Name: {newUser.lastName}</p>
                <p>Email: {newUser.email}</p>
                <p>Password: {newUser.password}</p>
                <p>Confirm Password: {newUser.confirm}</p>
            </div>
        )
    };

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            
        </div>
    );
};

export default UserForm;

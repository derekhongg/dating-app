import { useState } from 'react';
import React from 'react'

function Authentication( {setShowModal} ) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error, setError] = useState();

    const handleClick = () => {
        setShowModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            if( isSignUp && (password !== confirmPassword)) {
                setError("Passwords do not match!")
            }
            console.log("Make post request to our database")
        } catch (error) {
            console.log(error);
        }
    }

    const isSignUp = true;

    return (
        <div className='auth-modal'>
            <div className='close-icon' onClick={handleClick}>x</div>
            <h2>{isSignUp? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p>By clicking Sign Up, You Agree To Our Terms. Learn How We Process Your Data in Our Privacy & Cookie Policy</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder='Password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="Confirm Password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>
            <hr/>
            <h2>GET THE APP</h2>
        </div>
    )
}

export default Authentication
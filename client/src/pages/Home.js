import React from 'react';
import Nav from '../components/Nav';

function Home() {

    const authToken = false;

    const handleClick = () => {
        console.log("hello")
    }
    return (
        <>
            <div className='overlay'>
            <Nav minimal={false}/>
            <div className='home'>
                <h1>Meet Your Match Today!</h1>

                <button className='primary-button' onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>
            </div>
            </div>
        </>
    )
}

export default Home
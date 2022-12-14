import React, { useState } from 'react';
import Authentication from '../components/Authentication';
import Nav from '../components/Nav';


function Home() {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)

    const authToken = false;

    const handleClick = () => {
        console.log("hello");
        setShowModal(true);
        setIsSignUp(true)
    }
    return (
        <>
            <div className='overlay'>
                <Nav minimal={false}
                    authToken={authToken}
                    setShowModal={setShowModal}
                    showModal={showModal} 
                    setIsSignUp={setIsSignUp}
                />
                <div className='home'>
                    <h1 className='primary-title'>Meet Your Match Today!</h1>

                    <button className='primary-button' onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>

                    {showModal && (
                        <Authentication setShowModal={setShowModal} isSignUp={isSignUp}/>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
import React, { useState } from 'react';
import Authentication from '../components/Authentication';
import Nav from '../components/Nav';


function Home() {

    const [showModal, setShowModal] = useState(false)
    const authToken = false;

    const handleClick = () => {
        console.log("hello");
        setShowModal(true);
    }
    return (
        <>
            <div className='overlay'>
                <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
                <div className='home'>
                    <h1>Meet Your Match Today!</h1>

                    <button className='primary-button' onClick={handleClick}>
                        {authToken ? 'Signout' : 'Create Account'}
                    </button>

                    {showModal && (
                        <Authentication setShowModal={setShowModal} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Home
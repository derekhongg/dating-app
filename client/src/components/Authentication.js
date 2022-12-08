import React from 'react'

function Authentication( {setShowModal} ) {

    const handleClick = () => {
        setShowModal(false);
    }

    return (
        <div className='auth-modal'>
            <div onClick={handleClick}>x</div>
            AUTH MODEL
        </div>
    )
}

export default Authentication
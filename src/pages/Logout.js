import React from 'react'

const Logout = () => {

    const handleLogout = () => {
        fetch('http://localhost:3000/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(() => {
                console.log('Logged out successfully!');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('userId');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };


    return (
        <div><button onClick={handleLogout}>Logout</button></div>
    )
}

export default Logout
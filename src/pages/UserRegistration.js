import React from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';

const UserRegister = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        console.log(data, 'data');
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData.data, 'rd');
                console.log('Registration successful!');
                const userId = responseData.data._id;
                localStorage.setItem('userId', userId);
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    };


    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div className="container" style={{ width: '30%' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Registration Form</h1>
                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="userName"
                                    placeholder="Enter User Name"
                                    {...register('userName', {
                                        required: 'Username is required',
                                    })}
                                />
                                {errors.userName && (
                                    <p style={{ color: 'red' }}>{errors.userName.message}</p>
                                )}
                            </div>
                            <div className="field">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    {...register('email', {
                                        required: 'E-mail is required',
                                    })}
                                />
                                {errors.email && (
                                    <p style={{ color: 'red' }}>{errors.email.message}</p>
                                )}
                            </div>

                            <div className="field">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter Password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters',
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Password cannot exceed 20 characters',
                                        },
                                    })}
                                />

                                {errors.password && (
                                    <p style={{ color: 'red' }}>{errors.password.message}</p>
                                )}
                            </div>
                            <button className="fluid ui button blue" style={{ backgroundColor: '#bf5372' }} type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Box>
        </>
    );
};

export default UserRegister;

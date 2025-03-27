'use client'
// add more validation on inputs
// add handling for 'enter' onSubmit 
import React, { useState } from 'react';
import Form from 'next/form';
import styles from "./page.module.css";

const NewSignupForm = () => {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [petName, setPetName] = useState('');
    const [petWeight, setPetWeight] = useState('');
    const [idealWeight, setIdealWeight] = useState('');

    const onSubmitForm = () => {
        return(
            console.log(email, password, petName, petWeight, idealWeight )
        )
    }

    return(
        <div className='signup-fields'>
            <Form className='input'>
                <h3>Email: </h3>
                <input 
                    name='email' 
                    // type only validates on enter
                    type='email' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form>
            <Form className='input'>
                <h3>Password: </h3>
                <input 
                    name='password' 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                />
            </Form>
            <Form className='input'>
                <h3>Confirm Password: </h3>
                <input 
                    name='confirm-password' 
                    type='string' 
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)}
                />
            </Form>
            <Form className='input'>
                <h3>Pet Name: </h3>
                <input 
                    name='pet-name' 
                    type='string' 
                    value={petName} 
                    onChange={e => setPetName(e.target.value)}
                />
            </Form>
            <Form className='input'>
                <h3>Pet Weight: </h3>
                <input 
                    name='pet-weight' 
                    type='number' 
                    value={petWeight} 
                    onChange={e => setPetWeight(e.target.value)}
                />
            </Form>
            <Form className='input'>
                <h3>Pet Ideal Weight: </h3>
                <input 
                    name='ideal-weight' 
                    type='number' 
                    value={idealWeight} 
                    onChange={e => setIdealWeight(e.target.value)}
                />
            </Form>
            <button type='submit' onClick={onSubmitForm} >Submit</button>
        </div>
    )
};

export default NewSignupForm;
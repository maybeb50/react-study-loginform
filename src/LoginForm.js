import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function LoginForm({ authenticated, login, location }) {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleClick = () => {
        try {
            login({
                email, password
            })
        } catch(e) {
            alert('failed to login');
            setEmail('');
            setPassword('');
        }
    }

    const { from } = location.state || { from: { pathname: '/'} }
    
    if (authenticated) return <Redirect to={ from } />

    return(
        <>
            <h1>Login</h1>
            <label htmlFor="email">email</label>
            <input 
                type="text"
                id="email"
                placeholder="이메일을 입력해주세요."
                value={ email }
                onChange={ ({ target: { value } }) => setEmail(value) }
            />
            <br />
            <label htmlFor="password">password</label>
            <input 
                type="password"
                id="password"
                placeholder="패스워드를 입력해주세요."
                value={ password }
                onChange={ ({ target: { value } }) => setPassword(value) }
            />
            <br />
            <button onClick={ handleClick }>로그인</button>
        </>
    )
}

export default LoginForm;
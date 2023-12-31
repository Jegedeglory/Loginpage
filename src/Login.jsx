import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
    <div className="auth-form-container">
        <h2>Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youemail@gmail.com" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="******" id="password" name="password" />
        <button type="submit">Login</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register Here</button>
    </div>
    )
}
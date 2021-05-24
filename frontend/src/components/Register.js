import { useState } from 'react'
import Button from "./Button";

function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function Register(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            })
        });
        const data = await res.json();
        setUsername("");
        setPassword("");
        setEmail('');
    }

    return (
        <form className="form-group" onSubmit={Register}>
            <input type="text" className="form-control" name="username" placeholder="Uporabnisko ime"
                value={username} onChange={(e) => (setUsername(e.target.value))} required=""/>
            <input type="password" className="form-control" name="password" placeholder="Geslo"
                value={password} onChange={(e) => (setPassword(e.target.value))} required=""/>
            <input type="text" className="form-control" name="email" placeholder="E-mail"
                value={email} onChange={(e) => (setEmail(e.target.value))} required=""/>
            <Button text="Registracija" class="btn btn-primary"/>
        </form>
    )
}
export default Register;
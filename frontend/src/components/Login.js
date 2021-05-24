import { useState } from 'react'
import Button from "./Button";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function Login(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
            
        });
        if (res.status == 401) {
            alert("Napacno ime ali geslo!");
        }
        localStorage.setItem("username", username);
        const data = await res.json();
        setUsername("");
        setPassword("");
    }

    return (
        <form className="form-group" onSubmit={Login}>
            <input type="text" className="form-control" name="username" placeholder="Uporabnisko ime" value={username} onChange={(e) => { setUsername(e.target.value) }} required=""/>
            <input type="password" className="form-control" name="password" placeholder="Geslo" value={password} onChange={(e) => { setPassword(e.target.value) }} required="" />
            <Button text="Prijavi" class="btn btn-primary"/>
        </form>
    )
}

export default Login;
import { BrowserRouter, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Messages from './components/Messages';
import Login from './components/Login';
import Register from './components/Register';
import AddMessage from './components/AddMessage';
import MessageInfo from './components/MessageInfo';
import Comments from './components/Comments';
import AddComment from './components/AddComment';

function App() {
    const [message, setMessage] = useState([]);
    const [msg2, setMsg2] = useState([]);
    const [test, setTest] = useState("test");
    useEffect(function () {
        const getMessage = async function () {
            const res = await fetch('http://localhost:3001/message');
            const data = await res.json();
            console.log(data);
            setMessage(data);
        };
        getMessage();
    }, []);

    async function addMessage(task) {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        const formData = new FormData();
        formData.append('name', task.name);
        formData.append('slika', task.file);
        formData.append('likes', 0);
        formData.append('views', 0);
        formData.append('time', today);
        formData.append('author', localStorage.getItem("username"));

        const res = await fetch('http://localhost:3001/message', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        setTest(formData);
        const data = await res.json();
        setMessage([...message, data]);
    }

    async function addComment(task) {
        const formData2 = new FormData();
        formData2.append('comment', task.comment);
        formData2.append('username', task.username);
        formData2.append('idMessage', task.idMessage);

        const res = await fetch('http://localhost:3001/comments', {
            method: 'POST',
            credentials: 'include',
            body: formData2
        });
        const data = await res.json();
        setMsg2([...msg2, data]);
    }

    return (
        <BrowserRouter>
            <Route path="/" exact>
                <div className="App">
                    <Header/>
                    <Messages messages={message}/>
                </div>
            </Route>
            <Route path="/login">
                <Header/>
                <Login/>
            </Route>
            <Route path="/register">
                <Header />
                <Register />
            </Route>
            <Route path="/addMessage">
                <Header />
                <AddMessage onAdd={addMessage} />
            </Route>
            <Route path="/message/:id">
                <Header />
                <MessageInfo />
                <AddComment onAddComment={ addComment } />
            </Route>
      </BrowserRouter>
  );
}

export default App;

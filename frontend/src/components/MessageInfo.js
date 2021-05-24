import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from './Button';


function MessageInfo(props) {
   
    const [text, setText] = useState('');
    const [path, setPath] = useState('images/8178de333050905b07929b7a41583ad0');
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');
    const [views, setViews] = useState('');
    const [time, setTime] = useState('');
    const [author, setAuthor] = useState('');
    const { id } = useParams();
    
    async function Prikazi() {
        localStorage.setItem("idMessage", id);
        const res = await fetch('http://localhost:3001/message/' + id , {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        setText(data.text);
        setPath(data.path);
        setLikes(data.likes);
        setDislikes(data.dislikes);
        setViews(data.views);
        let datum = new Date(data.time);
        setTime(datum.toUTCString());
        setAuthor(data.author);
    }

    async function Like(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/message/' + id, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                likes: -1
            })

        });
        const data = await res.json();
    }

    async function Dislike(e) {
        e.preventDefault();
        const res = await fetch('http://localhost:3001/message/' + id, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dislikes: -1
            })

        });
        const data = await res.json();
    }

    return (
        <div onLoad={Prikazi}>
            <div>
                <h5>{text}</h5>
            </div>
            <img src={"http://localhost:3001/" + path} alt={text}
                width="800px" height="600px" />
            <div>
                <h6>{ "Autor: " + author }</h6>
                <h6>{ "Datum: " + time  }</h6>
                <h6>{"Stevilo ogledov: " + views}</h6>
                <h6>{"Stevilo likov: " + likes + " Stevilo NSFW: " + dislikes} </h6>
                <div onClick={Like}>
                    <Button text="Like" class="btn btn-primary" />
                </div>
                <div onClick={Dislike}>
                    <Button text="Dislike" class="btn btn-danger" />
                </div>
            </div>
        </div>
    )
}
export default MessageInfo;


/*
 * const {id} = useParams();
 * useEffect(, )..
 * hmtl
 */
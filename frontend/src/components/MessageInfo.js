import { useState } from 'react';
import { useParams } from 'react-router-dom';



function MessageInfo(props) {
   
    const [text, setText] = useState('');
    const [path, setPath] = useState('images/8178de333050905b07929b7a41583ad0');
    const [likes, setLikes] = useState('');
    const [views, setViews] = useState('');
    const [time, setTime] = useState('');
    const [author, setAuthor] = useState('');
    const { id } = useParams();
    async function Prikazi() {
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
        setViews(data.views);
        let datum = new Date(data.time);
        setTime(datum.toUTCString());
        setAuthor(data.author);
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
                <h6>{"Stevilo likov: " + likes} </h6>
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
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from "./Comment";


function Comments(props) {
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [idMessage, setIdMessage] = useState('');
    const { id } = useParams();
    async function Prikazi() {
        const res = await fetch('http://localhost:3001/comments/' + id, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json();
        setComment(data.comment);
        setUsername(data.username);
        setIdMessage(data.idMessage);
    }
    return (
        <div onLoad={Prikazi}>
            <div>
                <h5>Komentarji:</h5>
            </div>
            <div>
                {props.comments.map((comment) => (<Comment comment={comment} />))}
            </div>
        </div>
    )
}
export default Comments;
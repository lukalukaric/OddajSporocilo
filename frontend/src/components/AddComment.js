import { useState } from 'react'
import Button from "./Button";
import { useParams } from 'react-router-dom';

function AddComment(props) {
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
    const [messageId, setMessageID] = useState('');
    const { id } = useParams();
    
    function onSubmit(e) {
        e.preventDefault();
        //Validacija podatkov
        if (!comment) {
            alert("Vnesite komentar!");
            return;
        }
        if (!username) {
            alert("prijavi se!");
            return;
        }
        if (!messageId) {
            alert("napaka!");
            return;
        }

        //Pokliči onAdd v App componentu
        props.onAdd({ comment, username, messageId});

        //Počisti podatke v obrazcu
        setComment("");
        setUsername("");
        setMessageID("");
    }

    return (
        <form className="form-group" onSubmit={onSubmit}>
            <input type="text" className="form-control" name="komentar" placeholder="Komentar"
                value={comment} onChange={(e) => { setComment(e.target.value); setMessageID(id); setUsername(localStorage.getItem("username")) }} />
            <Button text="Komentiraj" class="btn btn-primary"/>
        </form>
    )
}

export default AddComment;
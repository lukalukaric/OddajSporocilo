import { useState } from 'react'
import Button from "./Button";
import { useParams } from 'react-router-dom';

function AddMessage(props) {
    const [comment, setComment] = useState('');
    const [username, setUsername] = useState('');
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

        //Pokliči onAdd v App componentu
        props.onAddComment({ comment, username, id});

        //Počisti podatke v obrazcu
        setComment("");
        setUsername("");
    }

    return (
        <form className="form-group" onSubmit={onSubmit}>
            <input type="text" className="form-control" name="komentar" placeholder="Komentar"
                value={comment} onChange={(e) => { setComment(e.target.value); setUsername(localStorage.getItem("username")) }} />
            <Button text="Komentiraj" />
        </form>
    )
}

export default AddMessage;
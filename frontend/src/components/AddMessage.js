import { useState } from 'react'
import Button from "./Button";

function AddMessage(props) {
    const [name, setName] = useState('');
    const [file, setFile] = useState('');

    function onSubmit(e) {
        e.preventDefault();

        //Validacija podatkov
        if (!name) {
            alert("Vnesite ime!");
            return;
        }
        if (!file) {
            alert("Izberi sliko!");
            return;
        }

        //Pokliči onAdd v App componentu
        props.onAdd({ name, file });

        //Počisti podatke v obrazcu
        setName("");
        setFile("");
    }

    return (
        <form className="form-group" onSubmit={onSubmit}>
            <input type="text" className="form-control" name="ime" placeholder="Ime slike" value={name} onChange={(e) => { setName(e.target.value) }} />
            <label>Izberi sliko</label>
            <input type="file" id="file" onChange={(e) => { setFile(e.target.files[0]) }} />
            <Button text="Naloži" />
        </form>
    )
}

export default AddMessage;
function Message(props) {
    let datum = new Date(props.message.time);
    if (props.message.dislikes > 1)
    {
        return (
            <>
            </>
            )
    }
    else
    {    
        return (
            <div className="card bg-dark text-dark mb-2" style={{ width: "500px",margin: "10px", padding: "10px", textAlign: "center" }}>
                <div>
                    <h5 style={{ color: "white" }}>{props.message.text}</h5>
                </div>
                <a href={"http://localhost:3000/message/" + props.message._id} ><img src={"http://localhost:3001/" + props.message.path} alt={props.message.name}
                    width="400px" height="300px" /> </a>
                <h6 style={{ color: "white" }}> {"Author: " + props.message.author } </h6>
                <h6 style={{ color: "white" }}> {"Likes: " + props.message.likes + " Dislikes: " + props.message.dislikes} </h6>
                <h6 style={{ color: "white" }}> {" Datum: " + datum.toUTCString() } </h6>
            </div>
            )
    }
}
export default Message;
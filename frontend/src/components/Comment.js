function Comment(props) {
    return (
        <div className="card bg-dark text-dark mb-2" style={{ width: "500px", margin: "10px", padding: "10px", textAlign: "center" }}>
            <h6 style={{ color: "white" }}> {"Username: " + props.comment.username} </h6>
            <h6 style={{ color: "white" }}> {"Komentar: " + props.comment.comment} </h6>
        </div>
    )
}
export default Comment;
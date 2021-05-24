import Comment from "./Comment";

function Comments(props) {
    return (
        <div>
            {props.comments.map((comment) => (<Comment comment={comment} />))}
        </div>
    )
}
export default Comments;
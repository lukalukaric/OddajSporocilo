import Message from "./Message";

function Messages(props) {
    return (
        <div>
            {props.messages.map((message) => (<Message message={message} />))}
        </div>
    )
}
export default Messages;
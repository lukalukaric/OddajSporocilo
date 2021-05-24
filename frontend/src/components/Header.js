import Button from "./Button";

function Header(props) {
    return (
        <header style={{ margin: "10px" }}>
            <Button text="Domov" link="http://localhost:3000" class="btn btn-primary"/>
            <Button text="addMessage" link="http://localhost:3000/addMessage" class="btn btn-primary"/>
            <Button text="Login" link="http://localhost:3000/login" class="btn btn-primary"/>
            <Button text="Register" link="http://localhost:3000/register" class="btn btn-primary"/>
        </header>
    )
}
export default Header;
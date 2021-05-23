import Button from "./Button";

function Header(props) {
    return (
        <header style={{ margin: "10px" }}>
            <Button text="Domov" link="http://localhost:3000" />
            <Button text="addMessage" link="http://localhost:3000/addMessage" />
            <Button text="Login" link="http://localhost:3000/login" />
            <Button text="Register" link="http://localhost:3000/register"/>
        </header>
    )
}
export default Header;
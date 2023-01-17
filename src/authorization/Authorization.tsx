import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { login } from "../api/requestsAPI";
import AdminPanel from "../modules/AdminPanel";

function Authorization() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const logIN = () => {
        if (email !== "" && password !== "" && password.length > 4) {
            const data = new FormData();
            data.append("loginRequest", "{email: " + email + ", password:" + password +"}")
            // data.append("password", password);
            const result = login(data);
            result.then(res => {
                // alert(res);
                if (res.roles[0] === "ROLE_ADMIN" || res.roles[1] === "ROLE_ADMIN") {
                    setSuccess(true);
                } else {
                    alert("Пароль неверный");
                }
            })
        } else {
            alert("Введите логин и пароль");
        }

    }

    if (success) {
        return <AdminPanel/>
    }

    return (
        <div>
            <Alert
                style={{backgroundColor: "#212529", color: "white", width: 350, marginLeft: "40%", marginTop: "20%"}}>
                <form className={"formAuth"}>
                    <Alert.Heading>Почта</Alert.Heading>
                    <input type={"email"} placeholder={"введите вашу почту"} onChange={(event) => setEmail(event.target.value)}/>
                    <Alert.Heading>Пароль</Alert.Heading>
                    <input type={"password"} placeholder={"введите ваш пароль"} onChange={(event) => setPassword(event.target.value)}/>
                    <Button style={{marginLeft: 10}} variant={"light"} onClick={logIN}>Войти</Button>
                </form>


            </Alert>
        </div>

    );
}

export default Authorization;
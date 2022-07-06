import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "semantic-ui-react";
import "./Login.css";
function Login() {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });
    const [isAllowed, setIsAllowed] = useState(false);
    const navigate = useNavigate();
    function handleChange(event) {
        setLoginDetails({
            ...loginDetails,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsAllowed(true);
        localStorage.setItem("token", isAllowed);
        let token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        } else {
            alert("you must Sign in First");
            navigate("/login");
        }
    }

    return (
        <div >
            <div >
                <form>
                    <Input
                        onChange={handleChange}
                        required
                    />
                    <Input
                        onChange={handleChange}
                        required
                    />
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Login;
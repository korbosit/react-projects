import { useState } from "react";

function Login() {
    // const [username, setUserName] = useState("");
    // const [password, setPassword] = useState("");

    const [data, setData] = useState({ username: "", password: "" });

    function handleFormSubmit(event) {
        event.preventDefault();

        // const userData = {
        //     username: userName,
        //     password: password,
        // };

        // const userData = {
        //     username,
        //     password,
        // };

        console.log(data);
        alert(JSON.stringify(data));
    }

    function handleInputChange(e, name) {
        setData({ ...data, [name]: e.target.value });
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={data.username}
                        onChange={(e) => handleInputChange(e, "username")}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={data.password}
                        onChange={(e) => handleInputChange(e, "password")}
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
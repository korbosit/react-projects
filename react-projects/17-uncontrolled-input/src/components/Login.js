function Login() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value,
        };

        console.log(userData);
        alert(JSON.stringify(userData));
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

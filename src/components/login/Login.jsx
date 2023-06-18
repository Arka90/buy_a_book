function Login() {
  return (
    <div className="login">
      <h3 className="auth-title">Login</h3>
      <form className="auth__form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-button">Log in</button>
      </form>
    </div>
  );
}

export default Login;

import "./Auth.css";
function Auth() {
  return (
    <div className="auth__container">
      <div className="register">
        <h3 className="auth-title">Register</h3>
        <form className="auth__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button className="auth-button">Register</button>
        </form>
      </div>
      <div className="login">
        <h3 className="auth-title">Login</h3>
        <form className="auth__form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="auth-button">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;

import Login from "../login/Login";
import Register from "../register/Register";
import "./Auth.css";
function Auth() {
  return (
    <div className="auth__container">
      <Register />
      <Login />
    </div>
  );
}

export default Auth;

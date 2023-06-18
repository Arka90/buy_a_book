import { useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    if (!password || !confirm_password || !email)
      alert("Please enter valid details");

    if (password !== confirm_password) alert("Password dose not match");

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <div className="register">
      <h3 className="auth-title">Register</h3>
      <form className="auth__form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input
          value={confirm_password}
          onChange={(e) => setConfirm_password(e.target.value)}
          type="password"
          placeholder="Confirm Password"
        />
        <button onClick={handelSubmit} className="auth-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;

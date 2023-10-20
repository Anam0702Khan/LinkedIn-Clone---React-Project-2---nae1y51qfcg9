import React, { useState } from "react";
import "../login/Login.css";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Firebase";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [PhotoUrl, setPhotoUrl] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const handleSignup = () => {
    {
      if (!email) {
        return alert("Email is required");
      }
      if (!name) {
        return alert("Name is required.");
      }
      if (!password) {
        return alert("Password is required.");
      }
      if (!PhotoUrl) {
        return alert("PhotoUrl is required");
      }
      setEmail("")
      setName("")
      setPhotoUrl("")
      setPassword("")
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      signInWithEmailAndPassword(auth, email, password)
    );
    const user = userCredential.user;
    // console.log("user",user)
    toast.success("Account created successfully");
    navigate("/feed").catch((err) => {
      alert(err);
      toast.error("Cannot create Account");
    });
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      toast.success("Account created successfully");
      navigate("/feed");
    } catch (error) {
      toast.error("Cannot Create Account");
      console.error(error);
    }
  };

  return (
    <div className="login">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
      />
      <h1 className="heading">Make the most of your professional life</h1>
      <div className="auth-inputs">
        <input
          className="common-input"
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="on"
        />
        <input
          className="common-input"
          type="text"
          placeholder="PhotoUrl"
          value={PhotoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          required
          autoComplete="on"
        />
        <input
          className="common-input"
          type="email"
          placeholder="Email or Phone number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="on"
        />
        <input
          className="common-input"
          type="password"
          placeholder="Password(6 or more characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className="sign-btn" onClick={handleSignup}>
        Agree & Join
      </button>
      <p className="or-text">OR</p>
      <div className="google-btn-container">
        <GoogleButton onClick={signInWithGoogle} />
        <p className="go-to-signup">
          Already on LinkedIn ?{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import "./Login.css";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword , GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { auth } from "../../Firebase";

function Login() {
  const [credentials, setCredentials] = useState({});
  let googleProvider = new GoogleAuthProvider()
  const navigate = useNavigate()

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, credentials.email, credentials.password);
    toast.success("Login in LinkedIn")
    navigate("/feed")
  };

  const googleSignIn =  async() => {
     try{
        let result =  await signInWithPopup(auth,googleProvider)
        toast.success("SignedIn to LinkedIn")
        navigate("/feed")
     } catch(err)  {console.log(err) 
      toast.error("Please check your Credentials ")}
  }
  return (
    <div className="login">
      <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
      />
      <h1 className="heading">Sign in</h1>
      <p className="sub-heading">Stay updated on your professional world</p>
      <div className="auth-inputs">
        <input
          className="common-input"
          type="email"
          placeholder="Email or Phone"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className="common-input"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
      </div>
      <button className="sign-btn" onClick={handleLogin}>Sign in</button>
      <p className="or-text">OR</p>
      <div className="google-btn-container">
        
      <GoogleButton
        onClick={ googleSignIn }
        
      />
      <p className="go-to-signup">New to LinkedIn ? <span className="join-now" onClick={() => navigate("/register")}>Join now</span></p>
      </div>
     
    </div>
  );
}

export default Login;

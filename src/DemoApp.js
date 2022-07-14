
import "./styles.css";
import { useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "./firebase-config";
const fstyle = {
  input: {
    padding: "10px 10px",
    margin: "10px 20px"
  },
  button: {
    padding: "10px 20px"
  }
};

export default function App() {
  //In the input field how to get what users input in the input fields
  //That's why we are going to use usestate and declare four states

  const [registeremail, setregisteremail] = useState("");

  const [registerpassword, setregisterpassword] = useState("");

  const [loginemail, setloginemail] = useState("");

  const [loginpassword, setloginpassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  //Register function

  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registeremail,
        registerpassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Login function
  const Login = async () => {};

  // Logout function

  const Logout = async () => {};
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome To The React Show</h1>
      <div>
        <h2>Register here</h2>
        <input
          style={fstyle.input}
          placeholder="Email"
          onChange={(event) => {
            setregisteremail(event.target.value);
          }}
        />
        <input
          style={fstyle.input}
          placeholder="Password"
          onChange={(event) => {
            setregisterpassword(event.target.value);
          }}
        />

        <button style={fstyle.button} onClick={Register}>
          Create Account
        </button>
      </div>

      <div>
        <h2>Login here</h2>
        <input
          style={fstyle.input}
          placeholder="Email"
          onChange={(event) => {
            setloginemail(event.target.value);
          }}
        />
        <input
          style={fstyle.input}
          placeholder="Password"
          onChange={(event) => {
            setloginpassword(event.target.value);
          }}
        />

        <button style={fstyle.button}>Login</button>
      </div>

      <h3 style={{ textAlign: "center" }}>User Logged In:{user?.email}</h3> 

      <button style={fstyle.button}>Sign OUT</button>
    </>
  );
}

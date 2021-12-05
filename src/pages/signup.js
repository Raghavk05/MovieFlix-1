import React, { useRef } from 'react';
import { auth } from "../firebase.js";
import "./signup.css";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

  auth
  .createUserWithEmailAndPassword(
    emailRef.current.value,
    passwordRef.current.value
  )
  .then((authUser) => {
    console.log(authUser);
  })
  .catch ((error) => {
    alert(error.message);
  });
};

  const signIn = (e) => {
  e.preventDefault();

  auth.signInWithEmailAndPassword (
    emailRef.current.value,
    passwordRef.current.value
  )
  .then((authUser) => {
    console.log(authUser);
  })
  .catch((error) => alert(error.message))


  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password"/>
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>New to MovieFlix? 
          <span className="signupScreen_link" onClick={register}> Sign up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUp;

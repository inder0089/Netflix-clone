import React, { useRef } from "react";
import { auth } from "../Firebase";

function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    alert(emailRef.current.value);
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      });
  };
  return (
    <div className="signupscreen">
      <h1>Sign In</h1>
      <form>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn}>Sign In</button>
      </form>
      <h4>
        New to Netflix <span onClick={register}>Sign up Now.</span>
      </h4>
    </div>
  );
}

export default Signup;

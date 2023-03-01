import React from "react";

function Signup() {
  return (
    <div className="signupscreen">
      <h1>Sign In</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </form>
      <h4>
        New to Netflix <span>Sign up Now.</span>
      </h4>
    </div>
  );
}

export default Signup;

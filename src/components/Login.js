import React, { useState } from "react";
import Logo from "../assets/images/Logonetflix.png";
import { Button, Container } from "react-bootstrap";
import Signup from "./Signup";

function Login() {
  const [signIn, setSignIn] = useState(false);

  const showSignup = () => {
    setSignIn(true);
  };

  return (
    <div>
      <div className="login-page">
        <Container>
          <div className="login__header">
            <Container>
              <img src={Logo} alt="img" />
              {/* <button>Sign In</button> */}
              <Button variant="light">Sign In</Button>
            </Container>
          </div>
          <div className="login__body">
            {signIn ? (
              <Signup />
            ) : (
              <>
                <h1>
                  Unlimited movies, TV <br />
                  shows and more.
                </h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <p>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>

                <form className="login-from" onSubmit={showSignup}>
                  <input type="email" placeholder="Email Address" />
                  <button>Get Started</button>
                </form>
              </>
            )}
          </div>
        </Container>
        <div className="login-gradient"></div>
      </div>
    </div>
  );
}

export default Login;

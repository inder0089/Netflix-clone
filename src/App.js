import React, { useEffect } from "react";
import Login from "./components/Login";
import style from "./assets/css/style.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./Firebase";

function App() {
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribr = auth.onAuthStateChanged((user) => {
      if (user) {
        // login
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        // logout
        dispatch(logout);
      }
    });
    return unsubscribr;
  }, []);
  return <div className="App">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;

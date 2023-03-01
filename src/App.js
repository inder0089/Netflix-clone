import React from "react";
import Login from "./components/Login";
import style from "./assets/css/style.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from "./HomeScreen";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return <div className="App">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;

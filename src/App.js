import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import * as React from 'react'
import styled from 'styled-components';
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import File from "./Pages/File";
import {Routes, Route, Router, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Logout from "./Pages/Logout";
// import { Switch } from "react-router-dom";

const LoginWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 600px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  height: 200px;
`
const AuthWrapper = styled.div`
  background: lightgrey;
  padding: 20px;
  width: 200px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;
  img {
    width: 20px;
  }
  button {
    width: 100%;
    background: darkmagenta;
    padding: 10px 20px;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 5px;
    cursor: pointer;
    margin-top:20px
  }
`

function App() {
  // const [user, setUser] = useState(null);
  // const Home = () => {
  //     return(<Home />);
  // }

  // const Login = () => {
  //   return(<Home />);
  // }

  // const SignUp = () => {
  //   return(<Home />);
  // }

  // const File = () => {
  //   return(<Home />);
  // }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<LoginWrapper><Login /></LoginWrapper>}/>
        <Route path="/register" element={<LoginWrapper><SignUp /></LoginWrapper>}/>
        <Route path="/files" element={<File/>}/>
        <Route path="/logout" element={<Logout/>}/>
      </Routes>
        
    </div>
        // <LoginWrapper>
        //   <File />
        // </LoginWrapper>
        // <LoginWrapper>
        //   <Login />
        // </LoginWrapper>
        // <LoginWrapper>
        //   <SignUp />
        // </LoginWrapper>
  );
}

export default App;

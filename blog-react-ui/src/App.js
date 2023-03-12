import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { LoginState } from './contexts/LoginContext';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Write from './pages/Write';
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';

function App() {
  return (
  <>
  <LoginState>
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/post">
          <SinglePost></SinglePost>
        </Route>

        <Route path="/write">
          <Write></Write>
        </Route>

        <Route path="/profile">
          <Profile></Profile>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  </LoginState>
  </>
  );
}

export default App;

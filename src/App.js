import React from "react";
import Main from "./Components/Main/Main";
import * as Env from "./environments";
import Parse from "parse";
import './App.css';
import Components from "./Components/components";
import 'bootstrap/dist/css/bootstrap.min.css';

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components /> ;
}

export default App;

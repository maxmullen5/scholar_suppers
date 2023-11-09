import React from "react";
//import Main from "./Components/Main/Main";
import * as Env from "./environments";
import Parse from "parse";
import './App.css';
import Components from "./Components/components";
import 'bootstrap/dist/css/bootstrap.min.css';
//import WebFont from 'webfontloader'; could not load asyncronously

var WebFont = require('webfontloader'); // makes it so that it loads before loading the font
WebFont.load({
  google: {
    families: ['Roboto:400,700', 'Ubuntu:500,700']
  }
});

Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

function App() {
  return <Components /> ;
}

export default App;

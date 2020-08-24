import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from './components/Main/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component{
  render(){
    return(
     <div className="">
            <Router>
      <Header/>
      <Main/>
      <Footer/>
      </Router>
     </div>    
    )
  }
}

export default App;

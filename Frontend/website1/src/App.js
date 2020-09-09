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
import { connect } from 'react-redux';
import Contact from './components/Contact/Contact';
class App extends React.Component{
  render(){
    return(
     <div className="">
      {/* <Router> */}
      <Header/>
     
      <Footer/>
      {/* </Router> */}
     </div>    
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    num: state.num
  }
}
// this.props.num
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ADD_DATA: (getitem) => {
      dispatch({type: 'ADD_DATA',getitem})
    }
  }
}

//this.props.ADD_DATA()
export default connect(mapStateToProps, mapDispatchToProps)(App)


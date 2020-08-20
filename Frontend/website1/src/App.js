import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from './components/Main/Main';
class App extends React.Component{
  render(){
    return(
     <div className="">
      <Header/>
      <Main/>
      <Footer/>
     </div>    
    )
  }
}

export default App;

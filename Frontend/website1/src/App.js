import React from 'react';
import './App.scss';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends React.Component{
  render(){
    return(
     <div>
       <Header/>

         <Footer/>
     </div>    
    )
  }
}

export default App;

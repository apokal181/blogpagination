import React from 'react'
import Navigation from "./components/common/navigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/footer'
import axios from "axios";
// import PersonList from "./components/common/api";
import States from './components/pagination/states'






function App() {
  return (
      <Router>


    <div className="App">
        <Navigation/>
        {/*<Home/>*/}
        {/*<PersonList/>*/}
        <States/>
                <Footer/>

        </div>





      </Router>
  );
}

export default App;

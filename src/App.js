import React from 'react'
import Navigation from "./components/common/navigation";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PostMasonry from "./components/common/post-masonry";
import Home from "./pages/home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/common/footer'

function App() {
  return (
      <Router>


    <div className="App">
        <Navigation/>

        <Home/>
                <Footer/>

        </div>





      </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/Shared/MenuBar/MenuBar';
import Banner from './components/Shared/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Services from './components/Services/Services';
import WorkProcess from './components/WorkProcess/WorkProcess';
import Events from './components/Events/Events';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutme">
            <AboutMe></AboutMe>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/workprocess">
            <WorkProcess></WorkProcess>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

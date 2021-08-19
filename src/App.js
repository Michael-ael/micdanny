import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About/About';
import Nav from './components/Navigation/Nav';
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import HomeServices from './components/HomeServices/HomeServices';
import 'slick-carousel/slick/slick-theme.css'


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Home />
            <HomeServices/>
          </Route> 
          <Route path="/about">
            <About/>  
          </Route>
        </Switch> 
      </Router> 

    </div>
  );
}

export default App;

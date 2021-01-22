
import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
// import Home from './components/pages/Events';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';







function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Events} />
          {/* <Route path='/Events' component={Events} />           */}
        </Switch>
      </Router>
    </>
  );
}

export default App;






































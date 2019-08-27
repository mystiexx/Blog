import React, { Component } from 'react';
import Header from './Nav/Header';
import Home from './Pages/Home';
import Player from './Pages/Player'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './stylesheet/style.css'
import './stylesheet/search-box.css'



class App extends Component {
  
  render() {
    

    return (
      <Router>
      <div>
      <Header />
      <Route path="/" exact component={Home}/>

          <Route path="/stories/:id" component={Player} />      
      </div>
      </Router>
    )
  }
}

export default App;

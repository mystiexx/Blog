import React, { Component } from 'react';
import Header from './Nav/Header';
import Home from './Pages/Home';
import SearchBar from './Pages/Search';
import Body from './Pages/Body';
import Player from './Pages/Player'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './stylesheet/style.css'
import './stylesheet/search-box.css'



class App extends Component {
  constructor() {
    super()
    this.state = {
      content: [],
      searchfield: ''
    }
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }

  componentDidMount(){
    fetch('http://localhost:6530/feed')
    .then(response => response.json())
    .then(feeds => {
      console.log(feeds.feeds)
      this.setState({
        content: feeds.feeds
      })
    })
  }
  render() {
    const filteredContent = this.state.content.filter(content => {
      return content.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <Router>
      <div>
      <Header />
        <Route path="/" exact render={props => 
        <div>
          <Home/>
            <SearchBar searchChange={this.onSearchChange} /><br/>
          <Body content={filteredContent} />
          </div>}/>

          <Route path="/stories/:id?/:title/:tagline/:desc" render={props => <div>
          <Player {...props}/> </div>} />       
      </div>
      </Router>
    )
  }
}

export default App;

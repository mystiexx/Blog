import React, { Component } from 'react'
import bottom from '../images/bottom.png'
import SearchBar from './Search';
import Body from './Body'

class Home extends Component {
    constructor() {
        super()
        this.state = {
          searchfield: ''
        }
      }
      onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    
      }
    
      
    render() {
        return (
            <div>
                <section id="banner">
                    <div className="container justify-content-center pb-5 ">
                        <div className="row">
                            <div className="col-6">
                                <p className="promo-title mt-5">TvBLOG</p>
                                <p className="promo-text">Read Stories and Watch Amazing <br />Videos, Your non-stop video
                                Plug </p>
                            </div>
                        </div>

                    </div>
                    <img src={bottom} className="bottom-img" />
                </section>
                <br/>
                <SearchBar searchChange={this.onSearchChange}/>,
                <Body />
            </div>

        )
    }
}


export default Home;
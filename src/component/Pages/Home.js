import React, { Component } from 'react'
import bottom from '../images/bottom.png'




class Home extends Component {
    render() {
        return (
            <div>
                <section id="banner">
                    <div className="container justify-content-center pb-5 ">
                    <div className="row">
                    <div className="col-md-6">
                    <p className="promo-title">TvBLOG</p>
                            <p>Read Stories and Watch Amazing Videos, Your non-stop video
                                Plug </p>
                    </div>

                    </div>
                            
                    </div>
                    <img src={bottom} className="bottom-img"/>
                    
                </section>
            </div>

        )
    }
}


export default Home;
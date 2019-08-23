import React, { Component } from 'react'
import bottom from '../images/bottom.png'
import news from '../images/newspaper.png'




class Home extends Component {
    render() {
        return (
            <div>
                <section id="banner">
                    <div className="container justify-content-center pb-5 ">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="promo-title mt-5">TvBLOG</p>
                                <p className="promo-text">Read Stories and Watch Amazing <br />Videos, Your non-stop video
                                Plug </p>
                            </div>
                            <div className="col-md-6">
                                <img src={news} className="img-fluid" />
                            </div>

                        </div>

                    </div>
                    <img src={bottom} className="bottom-img" />

                </section>
            </div>

        )
    }
}


export default Home;
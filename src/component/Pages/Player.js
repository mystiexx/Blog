import React, { Component } from 'react'
import color from '../images/color.png'
import {Container, Row, Col} from 'react-bootstrap'

class Player extends Component {
    constructor(match){
        super()
        this.state = {
            content: '',
        }
    }

    componentDidMount(){
        const {match: {params}} = this.props;
        fetch(`http://localhost:6530/feed/?id=${params}`)
        .then(response => response.json())
        .then(feed => {
          this.setState({
            content: feed.feeds
          })
          console.log(this.state.content)
        })
      }
    render() {
        return (
            <div>
               <Container className="mt-5">
                <section id="video">
                       <Row>
                           <Col> 
                           <iframe className="fixed-top position-static mt-5" style={{width: 560, height:315}} src={`https://www.youtube.com/embed/QhBnZ6NPOY0`} frameBorder="0"
                            allow="encrypted-media" allowFullScreen></iframe>
                            <h4 className="card-title"></h4><br/>
                            <p className="card-text text-justify" style={{overflow: 'auto'}}></p>
                           </Col>

                             <Col>
                             <main className="mt-4">
                             <h2 className="display-5">Other News </h2>
                             <article className="d-flex inline-block">
                            
                        <img src={color} className="thumb" />
                        <div className="details">
                            <h4 className="display-5">Stewie Griffin Sings Bad Guy by Billie Eilish</h4>
                            <p className="card-subtitle">Description</p>
                        </div>
                        </article>
                        </main>
                              </Col>

                           </Row>
                    </section>
           </Container>
            </div>

        )
    }
}
export default Player;
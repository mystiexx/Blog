import React, { Component } from 'react'
import video from '../videos/video1.webm'
import color from '../images/color.png'
import {Container, Row, Col} from 'react-bootstrap'

class Player extends Component {
    render() {
        return (
            <div>
               <Container className="mt-5">
                <section id="video">
                       <Row>
                           <Col> 
                           <iframe className="fixed-top position-static mt-5" style={{width: 560, height:315}} src={video} frameBorder="0"
                            allow="encrypted-media" allowFullScreen></iframe>
                            <h4 className="card-title">{this.props.match.params.title}</h4>
                            <p className="card-text text-justify" style={{overflow: 'auto'}}>Ad non id dolor magna sit ex aute aliquip sint nulla adipisicing ipsum aliquip eiusmod.
                             Excepteur laborum quis cillum mollit mollit proident aliqua sint aliquip non voluptate irure do. Nisi amet 
                             ipsum exercitation pariatur labore esse laboris nostrud anim aute proident non pariatur id. Velit fugiat duis 
                             Lorem anim velit fugiat eu dolor ea cillum. Nostrud esse fugiat cillum eu culpa. Elit nisi laboris nostrud nulla
                              nulla id excepteur.Laboris adipisicing Lorem do sit magna officia qui velit. Minim sunt qui esse fugiat culpa 
                              reprehenderit ex voluptate. Eu labore proident consectetur sit labore ipsum elit aliqua. Velit velit non elit 
                              officia nostrud officia irure ullamco occaecat. Sit duis irure ullamco pariatur voluptate eu quis commodo.
                               Nulla consectetur tempor ex in nulla dolore exercitation ea est. </p>
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
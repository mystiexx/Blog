import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import { Container, Row, Col, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      content: '',
      other: [],
    }
  }

  componentWillMount() {
    const { match } = this.props
      fetch(`https://urbanplotz.herokuapp.com/feed/${match.params.id}`)
        .then(response => response.json())
        .then(data => {
          this.setState({
            content: data
          })
        })
    fetch('https://urbanplotz.herokuapp.com/feed')
      .then(response => response.json())
      .then(feeds => {
        this.setState({
          other: feeds.feeds
        })
      })

      

  componentWillUpdate() {
    const { match } = this.props
    fetch(`https://urbanplotz.herokuapp.com/feed/${match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          content: data
        })
      })
  }


  render() {
    const { content } = this.state
    return (

      <div>
        <Container className="mt-5">
          <section id="video">
            <Row>
              <Col className="d-flex flex-column">
                <div className="d-flex flex-sm-wrap">
                  {content.videoUrl && 
                    <iframe width="560" height="315" 
                    className="position-sticky mt-5" alt="video"
                    src={content.videoUrl}
                    title="Youtube video"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                  }
                

                <h4 className="card-title">{content.title}</h4><br />
                <p className="card-text text-justify overflow-auto">{content.desc}</p>
                <hr/>
          <h6 className='text-muted mt-4'>Add Comment</h6>
                        <Form>
                            <Form.Group>
                                <Form.Control as="textarea" rows="2" />
                            </Form.Group>
                        </Form>
                        <div className='d-flex flex-wrap pb-5'>
                    <Button variant='primary' className='mt-3'>Add Comment</Button>
                </div>
              </Col>

              <Col>
                <main className="mt-4">
                  <h2 className="display-5">Other News </h2>
                  <div className="other-news overflow-auto">
                  {this.state.other.map((data, i)=>
                  <Link to={`/stories/${data._id}`} className='text-dark stories-text' style={{textDecoration: 'none'}}>  
                  <article className="d-flex inline-block" key={i}>
                    <img src={data.imageUrl} className="thumb" alt="news" />
                    <div className="details">
                      <h4 className="display-5">{data.title}</h4>
                      <p className="card-subtitle">{data.tagline}</p>
                    </div>
                  </article>
                  </Link>
                  )}
                  </div>
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

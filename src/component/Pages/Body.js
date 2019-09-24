import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StoryCard from './StoryCard'
import { Link } from 'react-router-dom'


class Body extends Component {
  
  render() {
   const {currentPosts} = this.props

    return (
      <div className="pb-5">
        <section id="popular">
          <div className="container-fluid flex-wrap align-center">
            <h2 className="title text-center">STORIES</h2> 
            <Row>      
               {currentPosts.map(data => {
                 return (
                   <Col md={3}>
                     <StoryCard id={data._id} image={data.imageUrl} title={data.title} />
                   </Col>

                 )
               }
            )}
            </Row>
            </div>
        </section>
      </div>
    )
  }
}

export default Body;
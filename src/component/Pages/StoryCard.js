import React, {Component} from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

class StoryCard extends Component{
    render(){
        const { id, image, title} = this.props;
        return(
            <div>
                <CardGroup>
                    <Card key={id} className='mt-3'>
                    <Card.Img src={image} alt='card-img' variant='top'/>
                        <Card.Body>
                            <Card.Title><Link to={`/stories/${id}`} style={{ textDecoration: 'none' }}><h5>{title} </h5>
                            </Link></Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}

export default StoryCard;
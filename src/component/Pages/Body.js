import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Body extends Component {
    constructor(){
        super()
        this.state = {
            content: [],
        }
    }
    componentDidMount(){
        fetch('http://localhost:6530/feed')
        .then(response => response.json())
        .then(feeds => {
          this.setState({
            content: feeds.feeds
          })
        })
      }

    render(){
        
        return(
            <div>
                <section id="popular">
                <div className="container-fluid flex-wrap align-center">
                <h2 className="title text-center">STORIES</h2>
                 {this.state.content.map((data,index)  => 
               <div key={data._id} className="card-group pb-2 ml-3 d-flex float-left" style={{width: 15 + 'rem'}}> 
			<div className="card shadow"  style={{border: 'none'}}>
           
            <img src={data.imageUrl} alt="alt" className="card-img-top"/>
            <div className="card-body">
            <Link to={`/stories/${data._id}`} style={{textDecoration: 'none'}}> 
            <h6 className="txt card-title">{data.title} </h6>  </Link>
                <p className="txt card-text">{data.tagline}  </p>
                <p className="txt card-text text-muted">{data.desc}  </p>
                </div>
                </div>
                </div> 
                ) }
                </div>
                </section>

                </div>
        )
    }
}

export default Body;
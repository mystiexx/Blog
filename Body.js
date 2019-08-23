import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import color from '../images/color.png'

class Body extends Component {
    render(){
        const {content} = this.props;
        return(
            <div>
                <section id="popular">
                <div className="container">
                <h2 className="title text-center">STORIES</h2>
                 {content.map((data,index)  => 
               <div key={index} className="card-group pb-5 ml-5 d-flex float-left" style={{width: 20 + 'rem'}}> 
			<div className="card shadow"  style={{border: 'none'}}>
            <Link to={`/stories/${index + 1}${data.title}`} style={{textDecoration: 'none'}}> 
            <img src={color}  className="card-img-top"/>
            <div className="card-body">
            <h6 className="txt card-title">{data.title} </h6>
                <p className="txt card-text">{data.Description}  </p>
                <p className="txt card-text text-muted">{data.Publisher}  </p>
                </div>
                </Link>
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
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Body extends Component {
    render(){
        const {content} = this.props;
        return(
            <div>
                <section id="popular">
                <div className="container-fluid flex-wrap align-center">
                <h2 className="title text-center">STORIES</h2>
                 {content.map((data,index)  => 
               <div key={index} className="card-group pb-2 ml-3 d-flex float-left" style={{width: 15 + 'rem'}}> 
			<div className="card shadow"  style={{border: 'none'}}>
            <Link to={`/stories/${index + 1}/${data.title}/${data.tagline}/${data.desc}`} style={{textDecoration: 'none'}}> 
            <img src={data.imageUrl} alt="alt" className="card-img-top"/>
            <div className="card-body">
            <h6 className="txt card-title">{data.title} </h6>
                <p className="txt card-text">{data.tagline}  </p>
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
import React, {Component} from 'react'
import color from '../images/color.png'

class Body extends Component {
    render(){
        const {content} = this.props;
        return(
            <div>
                <section id="popular">
                <div className="container">
                <h2 className="title text-center">STORIES</h2>
                 {content.map((data,i)  => 
               <div key={i} className="card-group pb-5 ml-5 d-flex float-left" style={{width: 20 + 'rem'}}> 
			<div className="card"  id={content[i].id}> 
            <img src={color}  className="card-img-top"/>
            <div className="card-body">
            <h6 className="card-title">{data.title} </h6>
                <p className="card-text">{data.Description}  </p>
                <p className="card-text text-muted">{data.Publisher}  </p>
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
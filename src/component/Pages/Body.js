import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Body extends Component {
  
  render() {
   const {currentPosts} = this.props

    return (
      <div className="pb-5">
        <section id="popular">
          <div className="container-fluid flex-wrap align-center">
            <h2 className="title text-center">STORIES</h2>       
               {currentPosts.map(data =>
              <div key={data._id} className="card-group pl-xl-2 p-sm-1 m-xl-2 ml-sm-5 mr-sm-3 d-flex float-left">
                <div className="card content-card" style={{ border: 'primary' }}>
                  <img src={data.imageUrl} alt="alt" className="card-img-top" />
                  <div className="card-body">
                    <Link to={`/stories/${data._id}`} style={{ textDecoration: 'none' }}>
                      <h6 className="txt card-title">{data.title} </h6>  </Link>
                  </div>
                </div>
              </div>
            )}
            </div>
        </section>
      </div>
    )
  }
}

export default Body;
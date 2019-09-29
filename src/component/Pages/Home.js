import React, { Component } from 'react'
import bottom from '../images/bottom.png'
import SearchBar from './Search';
import Body from './Body'
import Paginate from '../Pages/Pagination'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            searchfield: '',
            content: [],
            current_page: 1,
            posts_perpage: 20,
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('http://urbanplotz.herokuapp.com/feed')
            .then(response => response.json())
            .then(feeds => {
                this.setState({
                    content: feeds.feeds
                })
            })
    }


    render() {
        const { current_page, posts_perpage } = this.state;

        const indexOfLastPost = current_page * posts_perpage;
    
        const indexOFFirstPost = indexOfLastPost - posts_perpage;
    
        const currentPosts = this.state.content.slice(indexOFFirstPost, indexOfLastPost);
    
        const paginate = (pageNumber) => {
          this.setState({
            current_page: pageNumber,
          })
        }

        return (
            <div className='d-flex flex-column'>
                <section id="banner">
                    <div className="container justify-content-center pb-5 ">
                        <div className="row">
                            <div className="col-6">
                                <p className="promo-title mt-5">TvBLOG</p>
                                <p className="promo-text">Read Stories and Watch Amazing <br />Videos, Your non-stop video
                                Plug </p>
                            </div>
                        </div>

                    </div>
                    <img src={bottom} className="bottom-img" alt="images" />
                </section>
                <div className='container-fluid d-flex flex-column flex-sm-wrap'> 
                <SearchBar searchChange={this.onSearchChange} />
                <Body currentPosts={currentPosts} />
                <Paginate posts_perpage={posts_perpage} totalPosts={this.state.content.length} paginate={paginate}/>
                </div>
            </div>

        )
    }
}


export default Home;
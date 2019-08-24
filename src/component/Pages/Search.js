import React, {Component} from 'react'
import {FaSearch} from 'react-icons/fa'

class SearchBar extends Component{
    render(){
        const { searchChange } = this.props;
        return(
            <div>
                <section id="search">
                <div className="container">
                <div className="search-box">
            <input type="text" className="search-txt" onChange={searchChange} placeholder="Type to search"/>
            <div className="search-btn mb-5" href=""><FaSearch/></div>
        </div>

                </div>

                </section>

                </div>
        )
    }
}
export default SearchBar
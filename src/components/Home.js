import React, { Component } from 'react';
import BeatBank from './BeatBank'
import RecTabs from './RecTabs'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
               email: this.props.email
        }
        // console.log("my home one" + this.state.email)
    }

    render() { 
        return ( 
            <> 
            <div >
            <h2 id="header">タブの先生</h2>
        
            {/* <h2 id="featured_tabs">Featured Tabs</h2> */}
            <div id="heading">
            <img src="http://res.cloudinary.com/dok4pz3i3/image/upload/v1609866376/anime_girl_cropp_lvkjc3.png" id="anime_girl" alt="anime guitar girl"/> 
            <div className='recTabs'>
        
                    <RecTabs />
                </div>
                </div>
            <div className='home_elements'>
                <div className='beatBank'>
                    <BeatBank />
                </div>
            </div>
            </div>
            </>
         );
    }
}
 
export default Home;
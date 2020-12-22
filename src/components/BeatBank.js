import React, { Component } from 'react';
import Player from './Beats'

class BeatBank extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='beatBank'>
                <div>
                    <h1>Beat Bank</h1>
                    <Player />
                </div>
            </div>
         );
    }
}
 
export default BeatBank;
                
                    

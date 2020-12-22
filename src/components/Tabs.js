
import React, { Component } from 'react';
import Axios from 'axios'; 
import { Link } from 'react-router-dom';
// import '../home.css';
import TabResults from './TabResults';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

class Tabs extends Component {
    constructor() {
        super()

        this.state = {
            starships: [],
            search:''
        }
    }
    
 
    async componentDidMount() {
       
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        console.log('successful');
        console.log(res.data);
       
        
        this.setState({
            starships: res.data
           
        })
    }
    
    
    // componentDidUpdate(prevProps, prevState) {
    // if (this.state.starships === '') {
        
    //     return;
    // }
    // if (prevState.starships === this.state.starshipName) {
    //     return;
    // }
    // Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`).then((res) => {
    // }).catch(err => {
    //     console.log(err);
    // })
   
    // }
    handleClick=async()=>{
        const res = await Axios.get(`${REACT_APP_SERVER_URL}/api/request/${this.state.search}`)
        console.log('successful');
        console.log(res.data);
       
        
        this.setState({
            starships: res.data
           
        })
    }
    render() {
        return(
            <div className="tabs">
              <h2 id="header">ギタルのタブです</h2>
              <div id="starships">
                  {/* {this.state.starships.map((starship, index) => */}
                  
                  {/* <form onSubmit={console.log('line 49 submit ' + this.state.search)}> */}
                      <label>Search tabs by song or artist name</label> 
                      <br/>     
                      <input id="inputSearchbar" type="text" onChange={(e=>{this.setState({search: e.target.value})})}></input>
                      <br/>  
                      <button onClick={this.handleClick} >Search Tabs</button>
                    

                  {/* </form>  */}
                  <TabResults tabs={this.state.starships}/>
            
              </div>
          </div>
        )
    }
}

export default Tabs;
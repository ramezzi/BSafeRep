//import GameStatsStyle from './gamestats.css';
import {  FaArrowAltCircleRight, FaSearch } from "react-icons/fa";

const data =  [
    {
    name: 'Category1',
    id: 1,
    description: 'Course about light basics'
    },
    {
        name: 'Category2',
        id: 2,
        description: 'Course about stage basics'
        }
    ]


function HomepageCategories() {

  
    return(
        <div>
        
        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', width: '40%', height: 55, marginLeft: '50%', marginRight: '50%', marginRight: 10, marginBottom: 20}}>
          <div style={{flex: 4}}>
          <p style={{marginLeft: 20}}>Search...</p>
      </div>
        </div>

      <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 5, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: '#d8b9ff', boxShadow: '0px 0px 10px gray', width: '30%', float: 'left', height: 40}}>
          <div style={{flex: 3}}>
          <h4 style={{marginLeft: 0}}>Stages</h4>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 5, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: '#d8b9ff', boxShadow: '0px 0px 10px gray', width: '30%', float: 'left' , height: 40}}>
          <div style={{flex: 3}}>
          <h4 style={{marginLeft: 0}}>Lights</h4>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "gray", borderStyle: "solid", margin: 5, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: '#d8b9ff', boxShadow: '0px 0px 10px gray', width: '30%', float: 'left' , height: 40}}>
          <div style={{flex: 3}}>
          <h4 style={{marginLeft: 0}}>Events</h4>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "gray", borderStyle: "solid", margin: 5, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: '#d8b9ff', boxShadow: '0px 0px 10px gray', width: '30%', float: 'left' , height: 40}}>
          <div style={{flex: 3}}>
          <h4 style={{marginLeft: 0}}>Ergonomy</h4>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "gray", borderStyle: "solid", margin: 5, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: '#d8b9ff', boxShadow: '0px 0px 10px gray', width: '30%', float: 'left' , height: 40}}>
          <div style={{flex: 3}}>
          <h4 style={{marginLeft: 0}}>Electricity</h4>
      </div>
        </div>
        </div>
    );
  }
  export default HomepageCategories;
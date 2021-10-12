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

    var isQuizzSelected = false

function SearchComponent() {

  
    return(
        
        <div>
        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', width: '40%', height: 55, marginLeft: '50%', marginRight: '50%', marginRight: 10, marginBottom: 20}}>
          <div style={{flex: 4}}>
          <p style={{marginLeft: 20}}>Search quizzes...</p>
      </div>
      <div style={{flex: 1}}>
          <p style={{marginTop: '25%', fontSize: 30}}><FaSearch/></p>
      </div>
        </div>

        </div> 
    );
  }
  export default SearchComponent;
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

  
    return (
      <div
        style={{
          width: "80%",
          margin: "10px auto",
          display: "flex",
          flexdirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1>Quizzes</h1>
        <div
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderStyle: "solid",
            margin: "15px 0px 0px 0px",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "lightgray",
            boxShadow: "0px 0px 10px gray",
            width: "45%",
            height: 50,
          }}
        >
          <div style={{ flex: 4 }}>
            <p style={{ marginLeft: 10, fontSize: 14 }}>Search quizzes...</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ marginTop: "25%", fontSize: 20 }}>
              <FaSearch />
            </p>
          </div>
        </div>
      </div>
    );
  }
  export default SearchComponent;
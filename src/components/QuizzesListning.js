//import GameStatsStyle from './gamestats.css';
import {  FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import Stageimage from '../images/stageimage.jpg'
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import firebase from 'firebase';



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


  
function QuizzesListning() {

  const db = firebase.firestore()


  const [quizzess, setQuizzess] = useState([]);

    var isQuizzSelected = false

    const history = useHistory();

    const fetchQuizzes = async () => {

      const response=db.collection('quizzes');
      const data=await response.get();
      data.docs.forEach(item=>{
      setQuizzess([...quizzess,item.data()])
    })
    }

    useEffect(() => {
      fetchQuizzes();
    }, [])

    return(
        <div>
       <SearchComponent />

<h3 style={{marginLeft: 20, color: '#6603fc'}}>Stage safety Quizzes</h3>
      <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}} onClick={() => history.push("/quizzstart")}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Stage safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Stage Safety 1</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
          <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Stage safety 2</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Stage Safety 2</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Stage safety 3</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Stage Safety 3</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>


        <h3 style={{marginLeft: 20, color: '#6603fc'}}>Event safety Quizzes</h3>
      <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Event safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Event Safety 1</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Event safety 2</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Event Safety 2</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Event safety 3</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Event Safety 3</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>



        <h3 style={{marginLeft: 20, color: '#6603fc'}}>Light safety Quizzes</h3>
      <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Light safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Light Safety 1</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Light safety 2</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Light Safety 2</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray', height: 110}}>
          <div style={{flex: 5}}>
          <h3 style={{marginLeft: 20}}>Light safety 3</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Light Safety 3</p>
      </div>
      <div style={{flex: 1}}>
      <img src={Stageimage} alt="Stage image" style={{width: 150, height: '90%', margin: 5, borderRadius: 10}} />
      <p style={{marginTop: '40%', fontSize: 40, zIndex: 2, marginTop: -80, marginLeft: 80, color: 'white'}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

</div>

    );
  }
  export default QuizzesListning;
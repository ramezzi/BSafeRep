//import GameStatsStyle from './gamestats.css';
import { useState, useEffect } from "react";
import {  FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import Firesafety from '../images/firesafety.jpg';
import QuizzExample from "./QuizzExample";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";



function QuizzComponent( {quizzdata, navigation} ) {


    const quizzdatanew = quizzdata;

    var currentQuestion = 0;

    var showingQuestionArray = [quizzdata[currentQuestion]];

    const [showing, setShowing] = useState(quizzdata[0]);

    var [imageurl, setimageurl] = useState(quizzdata[0].image);

    var correctAnswers = 0;

    const currentDate = Date();

    var quizzResultObject = {
        "user": "testuser",
        "usersCorrectAnswers" : correctAnswers,
        "date": currentDate,
    }

    const updateQuestion = () => {

        currentQuestion = (currentQuestion + 1);

        if (currentQuestion === 9) {
            console.log("yay ready")
        } else {

        setShowing(quizzdatanew[currentQuestion]);
        setimageurl(quizzdatanew[currentQuestion].image);

        }

}

const onfirstupdate = () => { 
setShowing(quizzdatanew[0])

}

useEffect(() => {
    // Update the document title using the browser API
   // onfirstupdate()
  });
  
    return (
      <div>
          {}
     <h2 key={showing.id}> { showing.name } </h2>
     <p style={{textAlign: 'center'}}> { showing.description } </p>

     <img src={imageurl} alt="Logo" style={{marginLeft: '5%', height: '90%', width: '90%'}} />;

     <div
          style={{ flex: 1, position: "absolute", bottom: 80, width: "100%" }}
        >
          <button
            onClick={() => console.log("")}
            style={{
              margin: 10,
              background: "#d8b9ff",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 20,
              width: "25%",
              marginLeft: 40,
            }}
          >
            ?
          </button>

          <button
            onClick={() => console.log("")}
            style={{
              margin: 10,
              background: "#d8b9ff",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 20,
              width: "25%",
            }}
          >
            
          </button>

          <button
            onClick={() => updateQuestion()}
            style={{
              margin: 10,
              background: "#d8b9ff",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 20,
              width: "25%",
            }}
          >
            NEXT
          </button>
        </div>
        </div>
    );
  }
  export default QuizzComponent;
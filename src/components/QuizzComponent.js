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
    var [currentQuestion, setCurrentquestion] = useState(0);
    console.log('current question is now', currentQuestion)
    var showingQuestionArray = [quizzdata[currentQuestion]];
    const [showing, setShowing] = useState(quizzdata[0]);
    const [isReady, setisReady] = useState(false);
    const [isInfoSelected, setIsInfoSelected] = useState(false);
    var [imageurl, setimageurl] = useState(quizzdata.questions[0].image);
    var [qdescr, setQdescr] = useState(quizzdata.questions[0].description);
    var [currentCorrect, setCurrentCorrect] = useState(quizzdata.questions[0].correctAnswer);
    var [currentusersAnswer, setCurrentUsersAnswer] = useState(0);
    var [currentAnswers, setCurrentanswers] = useState(quizzdata.questions[0].answers);
    const [totalCorrect, setTotalcorrect] = useState(0);
    const [bgcolorf, setbgcolorf] = useState("lightgray")
    const [bgcolors, setbgcolors] = useState("lightgray")
    const [bgcolort, setbgcolort] = useState("lightgray")
    var correctAnswers = totalCorrect
    const currentDate = Date();
    const history = useHistory();
    const [currentMultipleSelection, setCurrentMultipleSelection] = useState(1);
    console.log('ojfjpo9fdsjo', quizzdata)
    var questionlist = quizzdata.questions
    console.log(questionlist)
  

    var quizzResultObject = {
        "user": "testuser",
        "usersCorrectAnswers" : correctAnswers,
        "date": currentDate,
    }

    const updateQuestion = () => {

      setbgcolorf('lightgray')
      setbgcolors('lightgray')
      setbgcolort('lightgray')
      console.log('we updating')
      if (currentCorrect === currentusersAnswer) {
        correctAnswers = correctAnswers + 1;
        setTotalcorrect(correctAnswers);
        console.log('user answered correct. total points ', correctAnswers)
      } else { 
        console.log('user selected wrong answer');
      }

        setCurrentquestion(currentQuestion + 1);
        console.log('and now', currentQuestion)

        //this is still test code.
        //in reality when all questions are looped quizzResultObject is pushed to firebase
        //and user is redirected to quizzfinish page where result is shown and user can continue using the app otherwise
        if (currentQuestion === quizzdata.questions.length-1) {
            setisReady(true);
            setShowing(quizzdata[0]);
          setimageurl(quizzdatanew.questions[0].image);
          setQdescr(quizzdata.questions[0].description)
          setCurrentCorrect(quizzdata.questions[0].correctAnswer)
            //createquizzresultobject
        } else {

        setShowing(quizzdata[currentQuestion+1]);
        setimageurl(quizzdatanew.questions[currentQuestion+1].image);
        setQdescr(quizzdata.questions[currentQuestion+1].description)
        setCurrentCorrect(quizzdata.questions[currentQuestion+1].correctAnswer)
        setCurrentanswers(quizzdata.questions[currentQuestion+1].answers)
     
       // }
        // <img src={showing.image} alt="Logo" style={{marginLeft: '10%', height: '80%', width: '80%'}} />; tämä renderöintiin
}
    }

const onfirstupdate = () => { 
setShowing(quizzdata);

}

const selectFirst = () => {
  setCurrentUsersAnswer(1)
  setbgcolorf('#6603fc')
  setbgcolors('lightgray')
  setbgcolort('lightgray')
}

const selectSecond = () => {
  setCurrentUsersAnswer(2)
  setbgcolorf('lightgray')
  setbgcolors('#6603fc')
  setbgcolort('lightgray')
}

const selectThird = () => {
  setCurrentUsersAnswer(3)
  setbgcolorf('lightgray')
  setbgcolors('lightgray')
  setbgcolort('#6603fc')
}

const checkInfoStatus = () => {
  if (isInfoSelected === false) {
    setIsInfoSelected(true)
  } else {
    setIsInfoSelected(false)
  }
}

useEffect(() => {
    // Update the document title using the browser API
    onfirstupdate()
  }, []);
  
    return (
      <div>

{ isReady ? <div style={{backgroundColor: 'white', height: '100%',}}>
      <h2 style={{marginTop: 60}}>Quizz tehty!</h2>
      <p style={{textAlign: 'center'}}>Sait oikein {totalCorrect}/{quizzdata.questions.length} kysymyksestä!</p>

      <button
            onClick={() => history.push('./quizzes')}
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
              marginLeft: "40%",
              marginTop: 60
            }}
          >
            VALMIS
          </button></div> :
          <div>
     <h2 > { } </h2>
     <p style={{textAlign: 'center'}}> { qdescr } </p>

     <img src={imageurl} alt="Logo" style={{marginLeft: '10%', height: '80%', width: '80%'}} />
    

     <button
            onClick={() => selectFirst()}
            style={{
              margin: 10,
              backgroundColor: bgcolorf,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 14,
              width: "15%",
            }}
          >
            {currentAnswers[0]}
          </button>

          <button
            onClick={() => selectSecond()}
            style={{
              margin: '20%',
              background: bgcolors,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 14,
              width: "15%",
            }}
          >
            {currentAnswers[1]}
          </button>

          <button
            onClick={() => selectThird()}
            style={{
              margin: 10,
              background: bgcolort,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 14,
              width: "15%",
            }}
          >
            {currentAnswers[2]}
          </button>

     <div
          style={{ flex: 1, position: "absolute", bottom: 50, width: "100%", paddingLeft: '15%'}}
        >
          
          {isInfoSelected ? <div style={{ }}><p>Täällä voisi olla vinkki mutta me emme auta sinua :).</p></div> : <div></div> }

          <button
            onClick={() => checkInfoStatus()}
            style={{
              margin: 10,
              background: "lightgray",
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 10,
              height: 50,
              boxShadow: "0px 0px 5px lightgray",
              fontSize: 20,
              width: "25%",
            }}
          >
            ?
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
        </div> }
        </div>
    );
  }
  export default QuizzComponent;
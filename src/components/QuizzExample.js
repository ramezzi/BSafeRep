//import GameStatsStyle from './gamestats.css';
import { useState } from "react";
import {  FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import Firesafety from '../images/firesafety.jpg';
import QuizzComponent from "./QuizzComponent";

const quizzdata = [{
  "id": 1,
  "name": "Kysymys 1",
  "description": "Mikä on vikana kuvassa?",
  "image" : "https://media.istockphoto.com/photos/safety-first-sign-isolated-on-white-background-picture-id913179886?k=20&m=913179886&s=612x612&w=0&h=ju5rh_2SBvKKfemXTGuug3g0EGu5A_5wy9KvOnqpvZo=",
  "answers": [
      {
      "answer1": "Ei mikään",
      "isCorrect": 0,
      },
      {
      "answer2": "Osa asioista",
      "partText": 0,
      },
      {
      "answer3": "Ihan kaikki",
      "partText": 1
      }
  ]
},
{
  "id": 2,
  "name": "Kysymys 2",
  "description": "Kuinka monta järjestyksenvalvojaa tarvitaan 100 hengen suuruisiin yleisötapahtumiin?",
  "image" : "https://media.istockphoto.com/photos/road-sign-3d-rendering-picture-id1060912048?b=1&k=20&m=1060912048&s=170667a&w=0&h=mXf0YDNfZjOGmVnsLFPcXjxZRklQ8AauXwa1voG8tl0=",
  "answers": [
      {
      "answer1": "First chapter",
      "isCorrect": 1
      },
      {
      "answer2": "Second chapter",
      "isCorrect": 0
      },
      {
      "answer3": "Third chapter",
      "isCorrect": 0
      }
  ]
}
];

    var isQuizzSelected = false

function QuizzExample( {navigation}) {

    const history = useHistory();

    const [isQuizzStarted, setIsQuizzStarted] = useState(false);
  
    return (
      <div>
        {isQuizzStarted ? (
          <div></div>
        ) : (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              opacity: "0.92",
            }}
          >
            <div
              style={{
                height: 250,
                width: "70%",
                position: "absolute",
                left: "15%",
                top: "20%",
                backgroundColor: "grey",
                opacity: 1,
              }}
            >
              <h2>Hei!</h2>
              <p>Tervetuloa aloittamaan testiä Stage Safety 1.</p>{" "}
              <p>
                Kun olet valmis suorittamaan kokeen klikkaa allaolevaa
                painiketta aloittaaksesi. Onnea!
              </p>
              <button
                onClick={() => setIsQuizzStarted(true)}
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
                }}
              >
                ALOITA
              </button>
            </div>
          </div>
        )}
        <button
          onClick={() => history.push("/quizzes")}
          style={{
            margin: 10,
            background: "transparent",
            borderWidth: 0,
            fontSize: 20,
          }}
        >
          BACK
        </button>

        <h2>Stage Quizz 1 </h2>

        <div
          style={{
            borderWidth: 1,
            borderStyle: "solid",
            height: 550,
            margin: 20,
            borderRadius: 10,
            borderColor: "lightgray",
          }}
        >
         <QuizzComponent quizzdata={quizzdata} navigation={navigation} />
        </div>

      
      </div>
    );
  }
  export default QuizzExample;
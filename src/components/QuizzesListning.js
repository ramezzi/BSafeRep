//import GameStatsStyle from './gamestats.css';
import { FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import Stageimage from "../images/stageimage.jpg";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";

const data = [
  {
    name: "Category1",
    id: 1,
    description: "Course about light basics",
  },
  {
    name: "Category2",
    id: 2,
    description: "Course about stage basics",
  },
];

function QuizzesListning() {
  const [quizzess, setQuizzess] = useState([]);

  var isQuizzSelected = false;

  const history = useHistory();

  const fetchQuizzes = async () => {
    const response = db.collection("quizzes");
    const data = await response.get().then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        setQuizzess((arr) => [...arr, data]);
      });
    });

    console.log("fetched quizzes", quizzess);
    // data.docs.forEach(item=>{
    //  setQuizzess([...quizzess,item.data()])
  };

  useEffect(() => {
    setQuizzess([]);
    fetchQuizzes();
  }, []);

  return (
    <div>
      <SearchComponent />

      {quizzess.map((item) => {
        return (
          <div
            style={{
              borderWidth: 1,
              borderColor: "grey",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "lightgray",
              boxShadow: "0px 0px 10px gray",
              height: 110,
            }}
          >
            <div style={{ flex: 5 }}>
              <h3 style={{ marginLeft: 20 }}>{item.name}</h3>
              <p style={{ marginLeft: 20 }}>{item.description}</p>
            </div>
            <div style={{ flex: 1 }}>
              <img
                src={Stageimage}
                alt="Stage image"
                style={{
                  width: 150,
                  height: "90%",
                  margin: 5,
                  borderRadius: 10,
                }}
              />
              <p
                style={{
                  marginTop: "40%",
                  fontSize: 40,
                  zIndex: 2,
                  marginTop: -80,
                  marginLeft: 80,
                  color: "white",
                }}
              >
                <FaArrowAltCircleRight
                  onClick={() => history.push("/quizzstart")}
                />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default QuizzesListning;

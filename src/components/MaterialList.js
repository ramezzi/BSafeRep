//import GameStatsStyle from './gamestats.css';
import { GrFormNext, FaSearch } from "react-icons/fa";
import SearchComponent from "./SearchComponent";
import Stageimage from "../images/stageimage.jpg";
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
//import firebase from 'firebase';
import { db } from "../firebaseConfig";
import firebase from "firebase";

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

function SavedMaterialList() {
  const [email, setEmail] = useState("");
  const [quizzess, setQuizzess] = useState([]);
  const [usersQuizzess, setUsersQuizzess] = useState([]);
  var addingList = [];

  var isQuizzSelected = false;

  const history = useHistory();

  const login = () => {

    /* console.log('logging in')
     firebase.auth().signInWithEmailAndPassword(formState.username, formState.password)
   .then((userCredential) => {
     // Signed in
     var user = userCredential.user;
     localStorage.setItem('user', user);
     setIsLoggenIn(true);
     CurrentUserProvider.setCurrentUser(user)
     
     // ...
  */
     firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         // User is signed in, see docs for a list of available properties
         // https://firebase.google.com/docs/reference/js/firebase.User
         var uid = user.uid;
         console.log(user)
         setEmail(user.email)
         // ...
       } else {
         // User is signed out
         // ...
       }
     });
  // })
  // .catch((error) => {
   //  var errorCode = error.code;
   //  var errorMessage = error.message;
   //  console.log(errorMessage)
  // });
   };

  const fetchQuizzes = async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(user)
        setEmail(user.email)
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

    const response = db.collection("userResults")
    const data = await response.get().then((querySnapshot) => {
      // Loop through the data and store
      // it in array to display
      querySnapshot.forEach((element) => {
        var data = element.data();
        setQuizzess((arr) => [...arr, data]);
        console.log('your tests', data)
        for (var i = 0; i++; i -= quizzess.length) {
          if (quizzess[i].username === "testuser") {
            addingList.push(quizzess[i]);
          }
          setUsersQuizzess(addingList);
          console.log("adding list ", addingList);
        }
      });
    });

    console.log("fetched quizzes", quizzess, addingList);
    // data.docs.forEach(item=>{
    //  setQuizzess([...quizzess,item.data()])
  };

  useEffect(() => {
    login()
    setQuizzess([]);
    fetchQuizzes();
  }, []);

  return (
    <div>
      {quizzess.map((item) => {
        return (
          <div
            style={{
              borderWidth: 1,
              borderColor: "#cac4ce",
              borderStyle: "solid",
              margin: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f7ece1",
              boxShadow: "0px 0px 10px gray",
              height: 110,
            }}
            onClick={() =>
              history.push({ pathname: "/quizzstart", state: item })
            }
          >
            <div style={{ flex: 5 }}>
              <h3 style={{ marginLeft: 20 }}>{item.quizzName}</h3>
              <p style={{ marginLeft: 20, float: "left" }}>{item.username}</p>
              <p style={{ marginLeft: 20, float: "left" }}>{item.date}</p>
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  marginTop: "40%",
                  fontSize: 30,
                  zIndex: 2,
                  marginTop: 30,
                  marginLeft: 0,
                  color: "#6603fc",
                }}
              >
                {item.correctAnswers}/10
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default SavedMaterialList;

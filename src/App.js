import logo from "./logo.svg";
import "./App.css";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomepageCategories from "./components/HomepageCategories";
import QuizzesListning from "./components/QuizzesListning";
import {
  FaSearch,
  FaHome,
  FaBook,
  FaQuestion,
  FaHeart,
  FaPersonBooth,
  FaPuzzlePiece,
  FaArrowAltCircleRight,
  FaUser,
} from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import QuizzExample from "./components/QuizzExample";
import SavedQuizzesListning from "./components/savedQuizzeslist";
import LoginComponent from "./components/LoginComponent";
import { useState } from "react/cjs/react.development";
import { auth } from "./firebaseConfig";
import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ETTEmaterial from "./ETTEmaterial";
import SavedMaterialList from "./components/MaterialList";

function App() {
  const [isLoggedIn, setIsLoggenIn] = useState(false);
  const [value, setValue] = useState("Email");
  const [token, setToken] = useState();
  const [checked, setChecked] = useState(true);
  const [showError, setShowError] = useState(false);

  const updateUserEmail = (value) => {
    // setUserEmail(value)
  };

  const login = () => {
    /* const autht = auth.getAuth();
  const signin = auth.signInWithEmailAndPassword()
  signin(auth, "testuser@emaill.com", "testpassword")
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

 if (checked === false) {

  setShowError(true)
 } else {
  setIsLoggenIn(true);
 } */
    setIsLoggenIn(true);
  };

  const [formState, setFormState] = useState({
    login: true,
    username: "",
    password: "",
  });

  const history = useHistory();

  return (
    <Router>
      {isLoggedIn ? (
        <div>
          <nav style={{ marginLeft: 0, paddingLeft: 0 }}>
            <ul
              style={{
                backgroundColor: "white",
                boxShadow: "0px 0px 10px gray",
              }}
            >
              <li>
                <Link to="/">
                  <FaHome />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FaBook />
                </Link>
              </li>
              <li>
                <Link to="/quizzes">
                  <FaPuzzlePiece style={{ color: "#6603fc" }} />
                </Link>
              </li>
              <li>
                <Link to="/saved">
                  <FaHeart />
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <FaUser />
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/quizzes">
              <Quizzes />
            </Route>
            <Route path="/quizzstart">
              <QuizzStartpage />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Saved />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
          <h1 style={{ color: "#6603fc", textAlign: "center" }}>BSafe</h1>
          <h2>Login</h2>

          <input
            style={{ width: "70%", marginLeft: "15%" }}
            value={formState.username}
            onChange={(e) =>
              setFormState({
                ...formState,
                username: e.target.value,
              })
            }
            type="text"
            placeholder="Your username"
          />

          <input
            style={{ width: "70%", marginLeft: "15%" }}
            value={formState.password}
            onChange={(e) =>
              setFormState({
                ...formState,
                password: e.target.value,
              })
            }
            type="text"
            placeholder="Your password"
          />

          <input
            style={{ marginLeft: "15%", marginTop: 50 }}
            type="checkbox"
            defaultChecked={checked}
            onChange={() => setChecked(!checked)}
          />

          <p style={{ fontSize: 14, marginLeft: "15%", width: "70%" }}>
            Olen hyväksynyt tietosuojaevästeet tms. mitä ikinä tähän
            laitetaankaan.
          </p>

          <button
            style={{ width: 100, height: 40, margin: "5%", marginLeft: "45%" }}
            onClick={() => login()}
          >
            Kirjaudu
          </button>
        </div>
      )}
    </Router>
  );
}

function Home() {
  const history = useHistory();
  return (
    <div class="homeContainer">
      <div class="header">
        <h1 class="bigHeader">BSafe</h1>
      </div>
      <HomepageCategories />
      <div style={{ width: "100%" }}>
        <h3 class="smallHeader">Aloita tästä</h3>
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
            height: 200,
          }}
        >
          <div style={{ flex: 3 }}>
            <h3 style={{ marginLeft: 20 }}>
              ETTE-materiaali kätevästi taskussasi
            </h3>
            <p style={{ marginLeft: 20 }}>
              Tutustu ja opiskele ETTE-materiaalia helposti ja kätevästi
              missä tahansa.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ marginTop: "35%", fontSize: 40, marginLeft: 30 }}
              onClick={() => history.push("/about")}
            >
              <FaArrowAltCircleRight />
            </p>
          </div>
        </div>

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
            height: 200,
          }}
        >
          <div style={{ flex: 3 }}>
            <h3 style={{ marginLeft: 20 }}>Testaa tietosi</h3>
            <p style={{ marginLeft: 20 }}>
              Testaa tietosi kätevillä testeillä eri osioista.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{ marginTop: "35%", fontSize: 40, marginLeft: 30 }}
              onClick={() => history.push("/quizzes")}
            >
              <FaArrowAltCircleRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div class="homeContainer">
      <div class="header">
        <h1 class="bigHeader">Pocket ETTE</h1>
        <div
          style={{
            borderWidth: 1,
            borderColor: "grey",
            borderStyle: "solid",
            margin: "20px 0px 0px 0px",
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "lightgray",
            boxShadow: "0px 0px 10px gray",
            width: "40%",
            height: 35,
          }}
        >
          <div style={{ flex: 4 }}>
            <p style={{ marginLeft: 20, marginTop: 5 }}>Search...</p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ marginTop: "20%", fontSize: 20 }}>
              <FaSearch />
            </p>
          </div>
        </div>
      </div>

      <ETTEmaterial />
    </div>
  );
}

function Quizzes() {
  return (
    <div class="homeContainer">
      <QuizzesListning />
    </div>
  );
}

function QuizzStartpage() {
  const history = useHistory();
  const location = useLocation();
  var quizzz = location.state;
  console.log("we got this item", location.state);
  return (
    <div class="homeContainer">
      <QuizzExample quizz={quizzz} />
    </div>
  );
}

function Saved() {
  return (
    <div class="homeContainer">
      <h1 class="bigHeader">Bookmarks</h1>

      <h3 class="smallHeader">Tallennetut Quizzit</h3>
      <p>
        Lista firebasesta kirjautuneen kÃ¤yttÃ¤jÃ¤n tallennetuista quizzeista.
      </p>
      <SavedQuizzesListning />

      <h3 class="smallHeader">Tallennetut kurssit</h3>
      <p>
        Lista firebasesta kirjautuneen kÃ¤yttÃ¤jÃ¤n tallennetuista kursseista.
      </p>
    </div>
  );
  <SavedMaterialList />;
}

function Profile() {
  return (
    <div class="homeContainer">
      <h1 class="bigHeader">Profile</h1>
      <h4 style={{ marginTop: 60 }}>Tervetuloa, testiuser!</h4>
      <h4>Trainee</h4>
      <h4>testi.user@email.com</h4>
      <h4>Other info</h4>

      <h3 class="smallHeader">Suoritetut testit</h3>
      <SavedMaterialList />
    </div>
  );
}

function Login() {
  return (
    <div>
      <LoginComponent />
      <p>
        Olen hyvÃ¤ksynyt tietosuojaevÃ¤steet tms. mitÃ¤ ikinÃ¤ tÃ¤hÃ¤n
        laitetaankaan.
      </p>
    </div>
  );
}

export default App;

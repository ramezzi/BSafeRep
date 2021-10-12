import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomepageCategories from './components/HomepageCategories';
import QuizzesListning from './components/QuizzesListning';
import {  FaAirbnb, FaHome, FaBook, FaQuestion, FaHeart, FaPersonBooth, FaPuzzlePiece, FaArrowAltCircleRight, FaUser } from "react-icons/fa";
import { useHistory } from "react-router";
import QuizzExample from './components/QuizzExample';

function App() {

  return (
    <Router>
    <div>
      <nav style={{marginLeft: 0, paddingLeft: 0}}>
        <ul>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/"><FaHome/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/about"><FaBook/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30, paddingBottom: 0, marginBottom: 0}}>
            <Link to="/quizzes"><FaPuzzlePiece style={{color: '#6603fc'}} /></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/saved"><FaHeart/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/profile"><FaUser/></Link>
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
      </Switch>
    </div>
  </Router>
  );
}

function Home() {
  return <div>
  <h2>BSafe</h2>
<HomepageCategories />
<div style={{width: '100%'}}>
<h3 style={{marginTop: 160, marginLeft: 20}}>Category</h3>
<div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray'}}>
          <div style={{flex: 3}}>
          <h3 style={{marginLeft: 20}}>Stage safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Stage Safety 1</p>
      </div>
      <div style={{flex: 1}}>
          <p style={{marginTop: '35%', fontSize: 40}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "grey", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray'}}>
          <div style={{flex: 3}}>
          <h3 style={{marginLeft: 20}}>Light safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Light Safety 1</p>
      </div>
      <div style={{flex: 1}}>
          <p style={{marginTop: '35%', fontSize: 40}}><FaArrowAltCircleRight/></p>
      </div>
        </div>

        <div style={{borderWidth: 1, borderColor: "gray", borderStyle: "solid", margin: 20, borderRadius: 10, display: "flex", flexDirection: "row", backgroundColor: 'lightgray', boxShadow: '0px 0px 10px gray'}}>
          <div style={{flex: 3}}>
          <h3 style={{marginLeft: 20}}>Event safety 1</h3>
      <p style={{marginLeft: 20}}>Quizz for the course Event Safety 1</p>
      </div>
      <div style={{flex: 1}}>
          <p style={{marginTop: '35%', fontSize: 40}}><FaArrowAltCircleRight/></p>
      </div>
        </div>
        </div>
</div>;
}

function About() {
  return <h2>Material</h2>;
}

function Quizzes() {
  return <div>
      <h2>Quizzes</h2>
  <QuizzesListning />
  </div>;
}

function QuizzStartpage() {

  const history = useHistory();
  return <div>
    <QuizzExample />
  </div>;
}

function Saved() {
  return <h2>Saved</h2>;
}

function Profile() {
  return ( 
  <div><h2>Profile</h2>
  <h4 style={{marginTop: 60}}>Firstname Lastname</h4>
  <h4>Trainee</h4>
  <h4>fistname.lastname@email.com</h4>
  <h4>Other info</h4></div>);
  
}

export default App;

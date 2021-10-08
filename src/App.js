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
import {  FaAirbnb, FaHome, FaBook, FaQuestion, FaHeart, FaPersonBooth, FaPuzzlePiece } from "react-icons/fa";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/"><FaHome/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/about"><FaBook/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/quizzes"><FaPuzzlePiece/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/saved"><FaHeart/></Link>
          </li>
          <li style={{paddingTop: 20, fontSize: 30}}>
            <Link to="/profile"><FaPersonBooth/></Link>
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
  <h2>Bsafe</h2>
<HomepageCategories />
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

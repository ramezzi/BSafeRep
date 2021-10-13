//import GameStatsStyle from './gamestats.css';
import { useState } from "react";
import {  FaArrowAltCircleRight, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import Firesafety from '../images/firesafety.jpg';

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

function QuizzExample() {

    const history = useHistory();

    const [isQuizzStarted, setIsQuizzStarted] = useState(false);
  
    return(
        
        <div>
            { isQuizzStarted ? <div></div> : <div style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', backgroundColor: 'white', opacity: '0.92'}}>
                <div style={{height: 250, width: '70%', position: 'absolute', left: '15%', top: '20%', backgroundColor: 'grey', opacity: 1,}}>
                <h2>Hei!</h2>
                <p>Tervetuloa aloittamaan testiä Stage Safety 1.</p> <p>Kun olet valmis suorittamaan kokeen klikkaa allaolevaa painiketta aloittaaksesi. Onnea!</p>
                <button onClick={() => setIsQuizzStarted(true)} style={{ margin: 10, background: '#d8b9ff', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, boxShadow: '0px 0px 5px lightgray', fontSize: 20, width: '25%', marginLeft: '40%'}}>ALOITA</button></div>
                </div>}
      <button onClick={() => history.push('/quizzes')} style={{ margin: 10, background: 'transparent', borderWidth: 0, fontSize: 20}}>BACK</button>
  
  <h2>Stage Quizz 1 </h2>

  <div style={{borderWidth: 1, borderStyle: 'solid', height: 550, margin: 20, borderRadius: 10, borderColor: 'lightgray'}}>
  <img src={Firesafety} alt="Stage image" style={{width: '95%', height: '80%', margin: 10, marginRight: 20, borderRadius: 10}} />
  <h4>Kuvassa oleva palosammutin on sijoitettu oikeaan paikkaan</h4><h4> lavaympäristössä?</h4>

</div>

      <div style={{flex: 1, position: 'absolute', bottom: 50, width: '100%'}}>

      <button onClick={() => history.push('/quizzes')} style={{ margin: 10, background: '#d8b9ff', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, boxShadow: '0px 0px 5px lightgray', fontSize: 20, width: '25%', marginLeft: 40}}>?</button>
  
      <button onClick={() => history.push('/quizzes')} style={{ margin: 10, background: '#d8b9ff', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, boxShadow: '0px 0px 5px lightgray', fontSize: 20, width: '25%'}}>CORRECT</button>
  
    <button onClick={() => history.push('/quizzes')} style={{ margin: 10, background: '#d8b9ff', borderWidth: 1, borderColor: 'gray', borderRadius: 10, height: 50, boxShadow: '0px 0px 5px lightgray', fontSize: 20, width: '25%'}}>WRONG</button>
  
      </div>


        </div> 
    );
  }
  export default QuizzExample;
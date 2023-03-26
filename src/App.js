import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import mokoko from './mokoko.png';
import first from './first.jpg';

function App() {
const[cards, setCards] = useState([
  {id:1, backImage: mokoko,  matching: false},
  {id:2,  backImage: mokoko, matching: false},
  {id:3,  backImage: mokoko, matching: false},
  {id:4, backImage: mokoko, matching: false},
  {id:5,  backImage: mokoko, matching: false},
  {id:6,  backImage:mokoko, matching: false},
  {id:7, backImage: mokoko, matching: false},
  {id:8,  backImage: mokoko, matching: false},
  {id:9,  backImage: mokoko, matching: false},
  {id:10, backImage: mokoko, matching: false},
  {id:11,  backImage: mokoko, matching: false},
  {id:12,  backImage: mokoko, matching: false},
]);

  return (
    <div className="App">
    <header className="App-header">
      <h2>Find the matching picture</h2>
      <button className='button'>New Game</button>
      <table>
        <tbody>
          <tr>
              {cards.slice(0,4).map((cards) => (
                <Card key={cards.id} id={cards.id} backImage={cards.backImage} matching={cards.matching} />))}
          </tr>
          <tr>
            {cards.slice(4,8).map((cards) => (
              <Card key={cards.id} id={cards.id} backImage={cards.backImage} matching={cards.matching} />))}
          </tr>
          <tr>
              {cards.slice(8,12).map((cards) => (
                <Card key={cards.id} id={cards.id} backImage={cards.backImage} matching={cards.matching} />))}
          </tr>
        </tbody>
      </table>
    </header>
  </div>
);
}

export default App;

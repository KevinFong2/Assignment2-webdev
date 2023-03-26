import logo from './logo.svg';
// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import mokoko from './mokoko.png';
import confused from './confused.png';
import hello from './hello.png';
import embarassed from './embarassed.png';
import thumbsUp from './thumbsUp.png';
import cry from './cry.png';
import flex from './flex.png';

function App() {
  const[cards, setCards] = useState([
    {id:1, pair:1,  backImage: mokoko, frontImage:confused, matching: false, flipped: false},
    {id:2, pair:1, backImage: mokoko, frontImage:confused, matching: false, flipped: false},
    {id:3, pair:2,backImage: mokoko, frontImage:hello, matching: false, flipped: false},
    {id:4, pair:2,backImage: mokoko, frontImage:hello, matching: false, flipped: false},
    {id:5, pair:3,backImage: mokoko, frontImage:embarassed, matching: false, flipped: false},
    {id:6, pair:3,backImage: mokoko, frontImage:embarassed, matching: false, flipped: false},
    {id:7, pair:4,backImage: mokoko, frontImage:thumbsUp, matching: false, flipped: false},
    {id:8, pair:4,backImage: mokoko, frontImage:thumbsUp, matching: false, flipped: false},
    {id:9, pair:5,backImage: mokoko, frontImage:cry, matching: false, flipped: false},
    {id:10, pair:5,backImage: mokoko, frontImage:cry, matching: false, flipped: false},
    {id:11, pair:6,backImage: mokoko, frontImage:flex, matching: false, flipped: false},
    {id:12, pair:6,backImage: mokoko, frontImage:flex, matching: false, flipped: false},
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
              <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} matching={cards.matching} flipped={cards.flipped} />))}
          </tr>
          <tr>
            {cards.slice(4,8).map((cards) => (
            <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} matching={cards.matching} flipped={cards.flipped} />))}
          </tr>
          <tr>
              {cards.slice(8,12).map((cards) => (
              <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} matching={cards.matching} flipped={cards.flipped} />))}
          </tr>
        </tbody>
      </table>
    </header>
  </div>
);
}

export default App;

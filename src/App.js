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
    {id:1, backImage: mokoko, frontImage:confused, matching: false, flipped: false},
    {id:2,  backImage: mokoko, frontImage:confused, matching: false, flipped: false},
    {id:3, backImage: mokoko, frontImage:hello, matching: false, flipped: false},
    {id:4, backImage: mokoko, frontImage:hello, matching: false, flipped: false},
    {id:5, backImage: mokoko, frontImage:embarassed, matching: false, flipped: false},
    {id:6, backImage: mokoko, frontImage:embarassed, matching: false, flipped: false},
    {id:7, backImage: mokoko, frontImage:thumbsUp, matching: false, flipped: false},
    {id:8, backImage: mokoko, frontImage:thumbsUp, matching: false, flipped: false},
    {id:9, backImage: mokoko, frontImage:cry, matching: false, flipped: false},
    {id:10, backImage: mokoko, frontImage:cry, matching: false, flipped: false},
    {id:11, backImage: mokoko, frontImage:flex, matching: false, flipped: false},
    {id:12, backImage: mokoko, frontImage:flex, matching: false, flipped: false},
  ]);
  const [storedCards, setStoredCards] = useState([]);

  const handleMokokoCard = (id) => {
    if(storedCards.length === 2) { 
      return;
    }
    setStoredCards([...storedCards, id]);

    setCards((mokokoCards) => {
      return mokokoCards.map((card) => {
        if (card.id === id) {
          return { ...card, flipped: !card.flipped };
        } else {
          return card;
        }
      });
    });

    if(storedCards.length === 1){
      const firstCard = cards.find((card) => card.id === storedCards[0]);
      const secondCard = cards.find((card) => card.id === id);

      if(storedCards.length === 1){
        if(firstCard.frontImage === secondCard.frontImage){
          setCards((mokokoCards) => {
            return mokokoCards.map((card) => {
              if (card.id === id || card.id === storedCards[0]) {
                return { ...card, matching: true };
              } else {
                return card;
              }
            });
          });
          setStoredCards([]);
        }
        else{
          setTimeout(() => {
            setCards((mokokoCards) => {
              return mokokoCards.map((card) => {
                if (card.id === firstCard.id || card.id === secondCard.id) {
                  return { ...card, flipped: false };
                } else {
                  return card;
                }
              });
            });
            setStoredCards([]);
          }, 1000);
        }
      }
    }
  };

  return (
    <div className="App">
    <header className="App-header">
      <h2>Find the matching picture</h2>
      <button className='button'>New Game</button>
      <table>
        <tbody>
        <tr>
              {cards.slice(0,4).map((cards) => (
              <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} flipped={cards.flipped} onClick={handleMokokoCard} />))}
          </tr>
          <tr>
            {cards.slice(4,8).map((cards) => (
            <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} flipped={cards.flipped} onClick={handleMokokoCard}  />))}
          </tr>
          <tr>
              {cards.slice(8,12).map((cards) => (
              <Card key={cards.id} id={cards.id} backImage={cards.backImage} frontImage={cards.frontImage} flipped={cards.flipped} onClick={handleMokokoCard} />))}
          </tr>
        </tbody>
      </table>
    </header>
  </div>
  );
}

export default App;
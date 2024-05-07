import React from 'react';


import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

const Quote = ({ text, author }) => {
  return (
    <div className="quote">
      <p className="quote-text">{text}</p>
      <p className="quote-author">- {author}</p>
    </div>
  );
};

const QuotePage = ({ quotes }) => {
  return (
    <div className="quote-page">
      <h1 className="page-title">Geek Food Quotes</h1>
      <div className="quote-list">
        {quotes.map((quote, index) => (
          <Quote key={index} text={quote.text} author={quote.author} />
        ))}
      </div>
    </div>
  );
};

const quotesData = [
  { text: "Cooking is an art, but all art requires knowing something about the techniques and materials.", author: "Nathan Myhrvold" },
  { text: "Food is our common ground, a universal experience.", author: "James Beard" },
  { text: "One cannot think well, love well, sleep well, if one has not dined well.", author: "Virginia Woolf" },
  { text: "People who love to eat are always the best people.", author: "Julia Child" },
  { text: "The only time to eat diet food is while you’re waiting for the steak to cook.", author: "Julia Child" },
  { text: "Cooking is like love. It should be entered into with abandon or not at all.", author: "Harriet Van Horne" },
  { text: "Life is uncertain. Eat dessert first.", author: "Ernestine Ulmer" },
  { text: "Food brings people together on many different levels. It’s nourishment of the soul and body; it’s truly love.", author: "Giada De Laurentiis" },
  { text: "Food is not rational. Food is culture, habit, craving and identity.", author: "Jonathan Safran Foer" },
  { text: "Good bread is the most fundamentally satisfying of all foods; and good bread with fresh butter, the greatest of feasts.", author: "James Beard" },
  { text: "First we eat, then we do everything else.", author: "M.F.K. Fisher" },
  { text: "If you really want to make a friend, go to someone's house and eat with them... the people who give you their food give you their heart.", author: "Cesar Chavez" },
  { text: "Food is symbolic of love when words are inadequate.", author: "Alan D. Wolfelt" },
  { text: "The secret ingredient is always love.", author: "Unknown" },
  { text: "Food is the ingredient that binds us together.", author: "Unknown" },
  { text: "Laughter is brightest in the place where the food is.", author: "Irish Proverb" },
  { text: "You don't need a silver fork to eat good food.", author: "Paul Prudhomme" },
  { text: "There is no sincerer love than the love of food.", author: "George Bernard Shaw" },
  { text: "Eating is a necessity, but cooking is an art.", author: "Unknown" },
  { text: "Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.", author: "Louise Fresco" }
];

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <QuotePage quotes={quotesData} />
      <Footer />
    </div>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Quote from './Quote.js';


/**
 * https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <div id="root"></div>
      <header></header>
      <div id="quote-box">
          <div id="header"><i class="fa fa-heart"></i>  Random Quote Machine</div>
          <div id="quote-content">
            <Quote/>
            {/*<div id="clickables">*/}
            {/*  <button id="new-quote">New Quote</button>*/}
            {/*  <button id="tweet-quote"><i class="fa fa-twitter"></i></button>*/}
            {/*</div>*/}
          </div>
      </div>
      <footer> <a href="https://github.com/maomalley" target="_blank" rel="noreferrer"><i class="fa fa-copyright" aria-hidden="true"></i>
        2023 maomalley</a></footer>
    </div>
  );
}

export default App;

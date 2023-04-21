import React, {Component, useEffect} from 'react';
import { useState } from "react";


class Quotes extends Component {
    constructor(){
        super()
        this.state = {
            message : '',
            author: ''
        }
    }

    //
    // const [quotes, setQuotes] = useState([]);
    // options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '11d7dd1d60msh6d1286e30cbe5ffp1eaf96jsnd5895b5e6ae7',
    //         'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    //     }
    // };
    // let tweet;
    // useEffect(() => {
    // fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         setQuotes(response);
    //         console.log(response);
    //     })
    //     .catch(err => console.error(err));
    // }, []);
    tweet;


    newQuote =()=> {
        useEffect(() => {
            fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', this.options)
                .then(response => response.json())
                .then(response => {
                    this.setState = ({message: response.text, author: response.author});
                    console.log(response);
                })
                .catch(err => console.error(err));
        }, []);
        this.tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("\" ") + encodeURIComponent(this.state.message) + encodeURIComponent(" \" - ") + encodeURIComponent(this.state.author);

    }
render(){
    return (
        <div>
            <div id="text">{ this.state.message }</div>
            <div id="author">- { this.state.author }</div>
            <div id="clickables">
                <button id="new-quote" onClick={this.newQuote()}>New Quote</button>
                <button id="tweet-quote"><a href={this.tweet} target="_blank"><i className="fa fa-twitter"></i></a></button>
            </div>
        </div>
    )};
}

export default Quotes;
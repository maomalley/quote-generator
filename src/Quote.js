import React, {useEffect, useState} from 'react';

function Quote(props) {
    const [quotes, setQuotes] = useState([]);
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '11d7dd1d60msh6d1286e30cbe5ffp1eaf96jsnd5895b5e6ae7',
    //         'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    //     }
    // };
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '11d7dd1d60msh6d1286e30cbe5ffp1eaf96jsnd5895b5e6ae7',
            'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
        }
    };

    const onLogoutClick = e => { // use consts or let
        e.preventDefault()

        // fetch('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info', options)
        // fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
        //     .then(response => response.json())
        //     .then(response => {
        //         setQuotes(response[0]);
        //         console.log(response);
        //     })
        //     .catch(err => console.error(err));
        // tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("\" ") + encodeURIComponent(quotes.quote) + encodeURIComponent(" \" - ") + encodeURIComponent(quotes.author);
    getQuote();
    }
    function getQuote(){
        fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
            .then(response => response.json())
            .then(response => {
                setQuotes(response[0]);
                console.log(response);
            })
            .catch(err => console.error(err));
    }


    // const authLinks = (
    //     // ...
    //     <button
    //         type="button"
    //         className="link-button nav-link"
    //         onClick={onLogoutClick} // no need 'this' keyword
    //     >
    //         )
    useEffect(()=>{
        getQuote();
    }, [])


    return (
        <div>
            <div id="text">{ quotes.quote }</div>
            <div id="author">- { quotes.author }</div>
            <div id="clickables">
                <button id="new-quote" onClick={onLogoutClick} class="btn btn-outline-primary">New Quote</button>
                <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("\"" + quotes.quote + " \" - " + quotes.author)}`} target="_blank" rel="noreferrer"><button id="tweet-quote" class="btn btn-info"><i className="fa fa-twitter"></i></button></a>
            </div>
        </div>
    );
}

export default Quote;
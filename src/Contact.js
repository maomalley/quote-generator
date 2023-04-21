import React from 'react';

function Contact(props) {
    return (
        <div>
            <form action="https://formspree.io/f/xpzejvrw" method="POST">

                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="firstname" placeholder="Your name.." required></input>

                    <label htmlFor="email">Your Email</label>
                    <input type="text" id="email" name="email" placeholder="Your email.." required></input>

                        <label htmlFor="subject">Comments</label>
                        <textarea id="subject" name="subject" placeholder="Your comments.." required></textarea>

                        <input type="submit" value="Submit"></input>

            </form>
        </div>
    );
}

export default Contact;
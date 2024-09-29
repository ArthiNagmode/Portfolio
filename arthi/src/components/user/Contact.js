import React from "react";
import Header from "./Header";
import "../../mystyle/mystyle.css";
const Contact= ()=>
{


    return(<>
    <Header/>

    <div>
    <h1 className="Display-6 text-center">
         Your in Contact Page
    </h1>
</div>
 
<section class="contact-form">
<h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to send me a message using the form below.</p>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required></input>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
            </form>
    </section>
    

    <footer>
        <p>&copy; 2024 Arthi Nagmode. All rights reserved.</p>
    </footer>
    </>


    );
}

export default Contact;
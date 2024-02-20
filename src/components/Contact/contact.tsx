import React from "react";
import './contact.css';
import Company from '../../assets/Company.png';
import Shibuya from '../../assets/Shibuya.jpg';
import Facebook from '../../assets/Fb.png';
import Linkedin from '../../assets/LinkedIn.png'

function Contact() {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My previous jobs</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies.
                    Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs"> 
                    <img src={Company} alt="Connect Companies" className="clientImg" />
                    <img src={Shibuya} alt="Shibuya" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Pleas fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://github.com/Ardinio/Dator_experten"> <img src={Facebook} alt="myGithubRep" className="link" /> </a>
                        <a href="https://github.com/Ardinio/Dator_experten"> <img src={Linkedin} alt="myGithubRep" className="link" /> </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact
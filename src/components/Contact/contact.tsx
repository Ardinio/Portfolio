import React, { useRef, useEffect } from "react";
import './contact.css';
import Company from '../../assets/Company.png';
import Shibuya from '../../assets/Shibuya.jpg';
import Facebook from '../../assets/Fb.png';
import Linkedin from '../../assets/LinkedIn.png'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef<any>();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_1cpl4wh', 'template_6uvguum', form.current, {
            publicKey: 'gwWcYg9mop1zRwMZC',
            })
            .then(
                () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert('Email Sent!')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        };
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
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name="from_name" />
                    <input type="email" className="email" placeholder='Your Email' name="from_email" />
                    <textarea className="msg" name="message" rows={5} placeholder="Your Message"></textarea>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.facebook.com/ardi.grapci?locale=sv_SE"> <img src={Facebook} alt="myGithubRep" className="link" /> </a>
                        <a href="https://www.linkedin.com/in/ardi-grapci-a54810239/"> <img src={Linkedin} alt="myGithubRep" className="link" /> </a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact
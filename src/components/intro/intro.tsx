import React from "react";
import './intro.css';
import bg from '../../assets/profile.png';
import btnImg from '../../assets/HireMe.png';
import { Link } from 'react-scroll/';

function Intro() {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ardi,</span> 
                <br />System Developer and IT Technician </span>
                <p className="introPara">
                    I'm a software developer with experience in creating backend applications <br /> I'm also a skilled IT technician.
                </p>
                <Link> <button className="btn"> <img src={btnImg} alt="Hire me" className="btnImg"/>Hire Me </button> </Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro
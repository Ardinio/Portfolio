import React from "react";
import './works.css';
import Portfolio1 from '../../assets/software.png';
import Portfolio2 from '../../assets/software2.png';
import Portfolio3 from '../../assets/software3.jpg';
import Portfolio4 from '../../assets/Development.jpg';
import Portfolio5 from '../../assets/computer.jpg';
import Portfolio6 from '../../assets/computer-components.png';

function Works() {
    return (
        <section id='works'>
            <h2 className="workstitle">My Portfolio</h2>
            <span className="worksDesc">
                I take pride in every project I work with I pay attention to details and make sure that every project is unique.
                My strongest attribute is that I will work on a project and always find a solution for any problem that stands in my way.
            </span>
            <div className="worksImgs">
                <a href="https://github.com/Ardinio/Dator_experten"> <img src={Portfolio1} alt="myGithubRep" className="worksImg" /> </a>
                <a href="https://github.com/Ardinio/Portfolio"> <img src={Portfolio2} alt="myGithubRep" className="worksImg" /> </a>
                <a href="https://github.com/Ardinio/Kalender"> <img src={Portfolio3} alt="myGithubRep" className="worksImg" /> </a>
                <a href="https://github.com/Ardinio/Hush-llesyslor"> <img src={Portfolio4} alt="myGithubRep" className="worksImg" /> </a>
                <a href="https://github.com/Ardinio/SImpel_Calculator"> <img src={Portfolio5} alt="myGithubRep" className="worksImg" /> </a>
                <a href="https://github.com/Ardinio/Shadows_Approach"> <img src={Portfolio6} alt="myGithubRep" className="worksImg" /> </a>
            </div>
        </section>
    );
}

export default Works
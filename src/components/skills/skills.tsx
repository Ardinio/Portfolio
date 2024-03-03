import React from "react";
import './skills.css';
import Development from '../../assets/Development.jpg';
import IT from '../../assets/IT.jpg';

function Skills() {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                I am skilled at creating backend applications and software, I can also work with IT related systems and software too.
                I have a great understanding how programming and computers works, I know to make easy to use applications and I can handle any computer related problems, and also servers.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Development} alt="Programming" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming</h2>
                        <p>I am a skilled programmer when it comes to backend applications. But I also know how to make good website like this one.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={IT} alt="IT" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>IT technician</h2>
                        <p>I am a skilled IT technician and I know a lot about computers, network and servers. I know how computers works and the operating systems like Windows and Linux.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills
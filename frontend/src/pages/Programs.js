import React from 'react';
import './Programs.css';
import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.avif';
import program3 from '../assets/program3.jpg';
import program4 from '../assets/program4.avif';
import program5 from '../assets/program5.avif';

const Programs = () => {
    const scrollLeft = () => {
        document.getElementById('programs-scroll').scrollLeft -= 300;
    };

    const scrollRight = () => {
        document.getElementById('programs-scroll').scrollLeft += 300;
    };

    return (
        <div className="programs-page">
            <h1>Our Programs</h1>
            <div className="scroll-container">
                <button className="scroll-btn left" onClick={scrollLeft}>◀</button>
                <div id="programs-scroll" className="programs-scroll">
                    <div className="program-card">
                        <img src={program1} alt="Program 1" />
                        <h3>Web Development Bootcamp</h3>
                        <p>Learn all the basics of web development in two months. This program will cover all the basics of HTML, CSS, and JavaScript including frameworks such as React.js.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program2} alt="Program 2" />
                        <h3>Data Science Workshop</h3>
                        <p>Get introduced to data science concepts and tools. This program covers data analysis, visualization, and machine learning basics along with making you proficient in Python and related libraries.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program3} alt="Program 3" />
                        <h3>Robotics Camp</h3>
                        <p>Today, industrial robots, as well as many other types of robots, are used to perform repetitive tasks.Build and program robots in this exciting camp. Learn about electronics, coding, and teamwork.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program4} alt="Program 4" />
                        <h3>Cybersecurity Training</h3>
                        <p>Cybersecurity is defending data from malicious attacks. Understand the basics of cybersecurity and how to protect systems and data from cyber threats.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program5} alt="Program 5" />
                        <h3>AI and Machine Learning</h3>
                        <p>Dive into the world of AI and machine learning with this comprehensive program covering algorithms and real-world applications and let the curiosity and creativity unleash.</p>
                        <button className="register-btn">Register</button>
                    </div>
                </div>
                <button className="scroll-btn right" onClick={scrollRight}>▶</button>
            </div>
        </div>
    );
};

export default Programs;

import React from 'react';
import './HomePage.css';
import program1 from '../assets/program1.jpg';
import program2 from '../assets/program2.avif';
import program3 from '../assets/program3.jpg';
import program4 from '../assets/program4.avif';
import { FaBusinessTime, FaUserGraduate } from 'react-icons/fa';
import { MdDiversity3 } from "react-icons/md";

const HomePage = () => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>STEM Connect</h1>
                    <h2>The hub that brings together students and educators.</h2>
                    <p>Join us to explore a world of learning and growth through various STEM programs designed for all ages.</p>
                    <button className="view-programs-btn">View Programs</button>
                </div>
            </section>
            <section className="programs-section">
                <h2>Popular Programs</h2>
                <div className="programs-grid">
                    <div className="program-card">
                        <img src={program1} alt="Program 1" />
                        <h3>Web Development Bootcamp</h3>
                        <p>Learn all the basics of web development in two months. This program will cover all the basics of HTML, CSS, and JavaScript.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program2} alt="Program 2" />
                        <h3>Data Science Workshop</h3>
                        <p>Get introduced to data science concepts and tools. This program covers data analysis, visualization, and machine learning basics.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program3} alt="Program 3" />
                        <h3>Robotics Camp</h3>
                        <p>Build and program robots in this exciting camp. Learn about electronics, coding, teamwork and the let the curiosity unleash.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    <div className="program-card">
                        <img src={program4} alt="Program 4" />
                        <h3>Cybersecurity Training</h3>
                        <p>Understand the basics of cybersecurity and how to protect systems and data from cyber threats.</p>
                        <button className="register-btn">Register</button>
                    </div>
                    {/* <div className="program-card">
                        <img src={program5} alt="Program 5" />
                        <h3>AI and Machine Learning</h3>
                        <p>Dive into the world of AI and machine learning with this comprehensive program covering algorithms and real-world applications.</p>
                        <button className="register-btn">Register</button>
                    </div> */}
                </div>
            </section>
            <section className="values-section">
                <h2>Our Values</h2>
                <p>What we want to achieve with STEM Connect.</p>
                <div className="values-grid">
                    <div className="value-card">
                        <FaBusinessTime size={50} />
                        <h3>Promoting Small Business in Education</h3>
                        <p>STEM Connect is a platform where small businesses in education can promote their own services. This includes individual tutors, the local prep center down your block, and even small programs held by universities and schools. No matter the size of one's program, we want to give everyone a chance to promote their educational resources.</p>
                    </div>
                    <div className="value-card">
                        <FaUserGraduate size={50} />
                        <h3>Connecting Students & Educators</h3>
                        <p>STEM Connect is a platform where educators can provide education to students regardless of where they are in the world.</p>
                    </div>
                    <div className="value-card">
                        <MdDiversity3 size={60} />
                        <h3>Diversity</h3>
                        <p>We believe that providing more resources will allow more diversity in the STEM field. STEM Connect is a place where everyone (including minorities) can access resources from a diverse group of educators. We want our platform to serve as another place where students can get more resources in STEM fields which will in turn help bring more diverse groups into STEM. We aim to help mitigate the gender gap in STEM and create a more diverse field.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;

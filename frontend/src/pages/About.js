// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <main className="container">
            <section className="about-content">
                <div className="about-images">
                    <figure>
                        <img src="https://plus.unsplash.com/premium_vector-1682310635241-80dc3ccea061?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHR1dG9yaW5nfGVufDB8fDB8fHww" alt="STEM Connect Activity" />
                        <figcaption>Personalized Sessions</figcaption>
                    </figure>
                    <figure>
                        <img src="https://plus.unsplash.com/premium_vector-1682310953970-931428325663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHR1dG9yaW5nfGVufDB8fDB8fHww" alt="STEM Connect Workshop" />
                        <figcaption>Leading Technologies</figcaption>
                    </figure>
                    <figure>
                        <img src="https://plus.unsplash.com/premium_vector-1682299635821-ba03e8c5a94d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="STEM Connect Coding" />
                        <figcaption>Coding Bootcamps</figcaption>
                    </figure>
                </div>
                <div className="about-text">
                    <hgroup>
                        <h2>About STEM Connect</h2>
                        <h3>Connecting Students and Educators in STEM</h3>
                    </hgroup>
                    <p>STEM Connect is a platform dedicated to bringing together students and educators who share a passion for Science, Technology, Engineering, and Mathematics. Our mission is to make STEM education accessible and engaging for everyone.</p>
                    <p>Founded in 2024, STEM Connect has grown to become a trusted hub for quality STEM programs, tutoring, and resources. We offer a variety of programs ranging from coding bootcamps to hands-on workshops, all designed to inspire and educate the next generation of innovators.</p>
                    <h3>Our Vision</h3>
                    <p>We envision a world where every student has the opportunity to explore and excel in STEM fields. By connecting learners with experienced educators, we aim to break down barriers and create a supportive community that fosters growth and innovation.</p>
                    <h3>Join Us</h3>
                    <p>Whether you are a student eager to learn, an educator ready to share your knowledge, or a partner looking to support our mission, STEM Connect welcomes you. Together, we can inspire the next generation of STEM leaders.</p>
                </div>
            </section>
        </main>
    );
}

export default About;

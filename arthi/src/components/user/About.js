import React from "react";
import Header from "./Header";
import "../../mystyle/mystyle.css";
const About = () => {

return(

    <>
    <Header/>

    <div>
    <h1 className="Display-6 text-center">
         Your in About Page
    </h1>
</div>
<section class="about-me">
        <h2>About Me</h2>
        <p>Hello! I’m <strong>Arthi Nagmode</strong>, a recent graduate from <strong>Aurora Technological and Research Institute</strong>, with a degree in <strong>Computer Science Engineering</strong>. My journey through academics has cultivated a passion for <strong>Web developing</strong>, and I am eager to start my professional career.</p>
        
        <p>Iam enthusiastic about developing and learning new technologies and am looking for opportunities where I can apply my skills in a real-world setting.</p>
        
        <h3>Skills</h3>
        <ul>
        <li>Java, Spring Framework </li>
            <li>HTML5, CSS3, JavaScript</li>
            <li>Bootstrap,ReactJs,Node.Js</li>
            <li>Database Management (MySQL)</li>
            <li>Problem Solving and Debugging</li>
            <li>Team Collaboration</li>
        </ul>

        <h3>Education</h3>
        <p><strong>Bachelor’s Degree in Computer Science Engineering</strong> <br></br>
        Aurora Technological and Research Institute | Graduated:  2023</p>
        
        <h3>Certifications</h3>
        <ul>
            <li>Certification in  Java Full Stack - By Nasscom</li>
            
        </ul>
        
        <h3>Interests</h3>
        <p>In my free time, I enjoy exploring new technologies, contributing to open-source projects . When I’m not coding, you can find me reading about innovations in tech, solving puzzles, or experimenting with new programming techniques.</p>
    </section>

    <footer>
        <p>&copy; 2024 Arthi Nagmode. All rights reserved.</p>
    </footer>
    </>

);

}
export default About;
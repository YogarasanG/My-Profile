import React from "react";
import img from "../img/pro.jpg";
import "./profile.css";
import Nav from "./Nav";
import { Element } from "react-scroll";

function Profile() {
  return (
    <div className="pContainer">
      <div className="head">
        <h2>Yogarasan G</h2>
        <div className="photo">
          <img src={img} alt="Yogarasan" />
        </div>
      </div>
      <div className="navbar">
        <Nav />
      </div>
      <div className="pBody">
        <div className="textArea">
          <Element name="Welcome">
            <h1>Welcome</h1>
          </Element>
          <p>
            Hey there, I'm Yogarasan, hailing from Dharmapuri, Tamil Nadu. I am
            a junior React JS Developer with 1.2 years of experience in System
            Administration.
          </p>
        </div>
      </div>
      <div className="pElements">
        <Education />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
}

const Education = () => {
  return (
    <div className="education">
      <Element name="Education">
        <h2>Education</h2>
      </Element>
      <div className="bca">
        <h3>Government Arts and Science College , Dharmapuri</h3>
        <h3>Bachelor of Computer Applications (BCA)</h3>
        <h4>Year of Passing: 2021</h4>
        <h4>Percentage of Marks: 79.5%</h4>
      </div>
      <div className="hsc">
        <h3>Senthil Matriculation Hr. Sec. School, Dharmapuri</h3>
        <h3>Higher Secondary Certificate (HSC)</h3>
        <h4>Year of Passing: 2018</h4>
        <h4>Percentage of Marks: 71.8%</h4>
      </div>
      <div className="sslc">
        <h3>Dawn Matriculation Hr. Sec. School, Dharmapuri</h3>
        <h3>Secondary School Leaving Certificate (SSLC)</h3>
        <h4>Year of Passing: 2016</h4>
        <h4>Percentage of Marks: 78.6%</h4>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="Experience">
      <Element name="Experience">
        <h2>Experience</h2>
      </Element>
      <h3>
        Bharath IT Service Ltd (Client: The Institute of Chartered Accountants
        of India - ICAI), Chennai
      </h3>
      <h3>May 2022 - Jul 2023</h3>
      <div className="Eitems">
        <ul className="Elist">
          <li>
            <b>
              Employed by Bharath IT Service Ltd and assigned to The Institute
              of Chartered Accountants of India (ICAI).
            </b>
          </li>
          <li>
            Managed all AMC products, including Systems, Servers, Networking,
            and resolved various system-related issues at ICAI.
          </li>
          <li>
            Diagnosed and fixed network problems and hardware or software
            faults.
          </li>
          <li>
            Server Backup & Maintenance : Implemented robust server backup
            solutions and performed routine maintenance to ensure data integrity
            and availability.
          </li>
          <li>
            Maintained server environments, ensured security, developed backup
            procedures, and optimized server performance.
          </li>
        </ul>
        <h5>Additional responsibilities for ICAI</h5>
        <ul className="Elist">
          <li>
            <b>Online Classes Technical Support:</b> Provided technical support
            for online classes, ensuring a smooth learning experience for
            students and educators.
          </li>
          <li>
            <b>WebEx & Zoom Meeting/Webinar Support:</b> Successfully created
            and supported WebEx and Zoom meetings/webinars, contributing to
            effective virtual collaboration.
          </li>

          <li>
            <b>CCTV Support & Monitoring:</b> Managed daily CCTV support and
            monitoring activities, ensuring the security of the premises.
          </li>
          <li>
            <b>Projector Support:</b> Provided technical support for projectors,
            contributing to seamless presentations and meetings.
          </li>
          <li>
            <b>LED Display Support and Configuration:</b> Successfully
            configured and supported LED displays for various events and
            presentations.
          </li>
          <li>
            <b>Council Members Meeting Audio Recording and Support:</b>{" "}
            Facilitated audio recording and technical support for council
            members' meetings, ensuring clear communication and documentation.
          </li>
        </ul>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="skills">
      <Element name="Skills">
        <h2>My Skills</h2>
      </Element>
      <div className="skillElement">
        <div className="web">
          <h3>Programming and Web Development:</h3>
          <ul>
            <li>React JS</li>
            <li>JavaScript</li>
            <li> HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="office">
          <h3>Office Tools:</h3>
          <ul>
            <li>Microsoft Excel</li>
            <li> Microsoft Word</li>
          </ul>
        </div>
        <div className="it">
          <h3>IT and Hardware:</h3>
          <ul>
            <li>Hardware troubleshooting</li>
            <li>Networking</li>
            <li>Server management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const todoLink = `https://ytodo.netlify.app/`;
  const weatherLink = `https://yforecast.netlify.app/`;
  const webLink = `https://thagadurweldindworks.netlify.app/`;
  const mathLink = `https://ymathgame.netlify.app/`;
  const quizLink = `https://yquizzapp.netlify.app/`;
  return (
    <div className="project">
      <Element name="Project">
        <h2>My Projects</h2>
      </Element>
      <div className="myApp">
        <div className="todo">
          <h5>
            <a href={todoLink} target="blank">
              Todo List
            </a>
          </h5>
          <p>
            Created and practiced a daily to-do list for productivity and time
            management.
          </p>
        </div>
        <div className="weather">
          <h5>
            <a href={weatherLink} target="blank">
              Weather ForeCast App
            </a>
          </h5>
          <p>
            Developed a website for practicing API links and creating a weather
            forecasting tool.
          </p>
        </div>
        <div className="thagadur">
          <h5>
            <a href={webLink} target="blank">
              Welding Works Website
            </a>
          </h5>
          <p>
            Developed a website for my father's business, providing information
            about the services offered.
          </p>
        </div>
        <div className="math">
          <h5>
            <a href={mathLink} target="blank">
              Math Magic Game
            </a>
          </h5>
          <p>
            Recreated a childhood memory game involving math expressions and a
            tic-tac-toe game.
          </p>
        </div>
        <div className="quiz">
          <h5>
            <a href={quizLink} target="blank">
              Quiz App
            </a>
          </h5>
          <p>Created an interactive quiz application.</p>
        </div>
      </div>
      <div className="role">
        <h5>Role and Contributions:</h5>
        <p>
          Independently created and developed these websites, seeking guidance
          from online resources and AI tools.
        </p>
      </div>
    </div>
  );
};


const Contact = () => {
  return (
    <div className="contacts">
      <Element name="Contact">
        <h2>Contact Me</h2>
      </Element>
      <ul>
        <li>
          <b>Name:</b> Yogarasan G
        </li>
        <li>
          <b>Address:</b> 3/199 Mel Kottai Medu, Dharmapuri, Tamil Nadu.
        </li>
        <li>
          <b>Phone:</b>+91 7502482295
        </li>
        <li>
          <b>Email:</b> yogarasanmani15@gmail.com
        </li>
      </ul>
    </div>
  );
};
export default Profile;

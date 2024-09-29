import BBG from '../src/assets/BBG.jfif';
import ux from '../src/assets/tester.jpg';
import web from '../src/assets/selenium.webp';
import app from '../src/assets/program.jpg'  ;
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/about.css';

export default function About() {
  return (
    <>
      <section id="skill">
        <h1 className="skillTitle">Experience</h1>
        <p className="skillDesc">
        He had extensive experience in test automation development and was recently designated as a test automation developer for a DAML-based financial exchange application. He had been working as a quality tester for Accenture internal projects.
        </p>
        
        <div className="skillContainer">
          <div className="skillBar">
            <img src={ux} alt="UI Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Quality Tester</h2>
              <p>Developed and maintained automated scripts for efficient testing.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={web} alt="Web Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Test Automation Developer</h2>
              <p>Creating test automation using Cucumber/Selenium.</p>
            </div>
          </div>

          <div className="skillBar">
            <img src={app} alt="App Design" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Software Engineer Technology Program</h2>
              <p>Learn to design software systems, write the code that implements those systems, and test systems to make sure they meet requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

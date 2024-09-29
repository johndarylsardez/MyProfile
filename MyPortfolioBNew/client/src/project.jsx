import project6 from '../src/assets/project6.jpg';
import '../src/index.css';
import '../src/project.css';

export default function Project() {
  return (
    <>
      <section id="works">
        <h2 className="worksTitle">My Projects</h2>
        <p className="worksDesc">
          Developed and implemented automated testing scripts to streamline the software testing
          process, reducing manual testing efforts by 40%. Created detailed test checklists to
          ensure full test coverage and adherence to acceptance criteria across multiple product
          backlog items. Working on test automation development for a Distributed Application
          Modeling Language (DAML) based application. Contributed to creating robust automation
          frameworks using Cucumber and Selenium, which increased the overall test coverage for
          critical application features.
        </p>
        
        <div className="worksImgs" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={project6} alt="project6" className="worksImg" />
        </div>
      </section>
    </>
  );
}

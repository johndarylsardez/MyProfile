import uiUxDesignImg from '../src/assets/ui-ux.jpg';
import '../src/index.css';
import '../src/project.css';

export default function Services() {
  return (
    <>
      <section id="services">
        <div className="servicesContainer">
          <h2 className="servicesTitle">My Services</h2>
          <p className="servicesDesc">
            I offer a range of services to help you bring your projects to life. Here are some of the services I provide:
          </p>
          
          <div className="servicesList">
            <div className="serviceItem">
              <h3>Web Development</h3>
              <p>Creating responsive and engaging websites tailored to your needs using the latest technologies.</p>
            </div>

            <div className="serviceItem">
              <h3>Mobile App Development</h3>
              <p>Building user-friendly mobile applications for both iOS and Android platforms.</p>
            </div>

            <div className="serviceItem">
              <h3>UI/UX Design</h3>
              <p>Designing intuitive user interfaces and experiences that delight your users.</p>
            </div>

            <div className="serviceItem">
              <h3>E-commerce Solutions</h3>
              <p>Developing robust e-commerce platforms to help you sell your products online effectively.</p>
            </div>

            <div className="serviceItem">
              <h3>SEO Optimization</h3>
              <p>Implementing strategies to improve your website's visibility on search engines.</p>
            </div>

            <div className="serviceItem">
              <h3>Technical Support</h3>
              <p>Providing ongoing support and maintenance for your web and mobile applications.</p>
            </div>
          </div>
        </div>
        
        <div className="servicesImageContainer">
          <img src={uiUxDesignImg} alt="UI/UX Design" className="serviceImage" />
        </div>
      </section>
    </>
  );
}

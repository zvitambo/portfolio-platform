import "./About.css";
import AboutImage from "../../assets/aboutImage.jpg";
//import CV from "../../assets/Thomas Jindu_Backend_Engineer_CV.pdf";
//import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";

const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='About' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About me</h2>
          <div className='about__cards'>
            {data.map((item)=>{
              return <Card key={item.id} className="about__card">
<span className="about__card-icon">
  {item.icon}
</span>
<h5>{item.title}</h5>
<small>{item.desc}</small>
              </Card>
            })}
          </div>
          <p>
            Building projects my clients love have always been my passion. Being
            in the web development industry for over 10 years and serving more
            than 50 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Zvitambo Thomas Jindu from Bulawayo, Zimbabwe. I'm a fullstack web
            developer with a solid background in Computer Science. My top
            priority is to get your business online the right way, giving you
            industry-standard design and all the functionality you need to
            operate smoothly online. Get in touch today with the details of your
            project let's get started! Check out my resume below!
          </p>
          {/* <a href={CV} download className='btn primary'>
            Download CV <HiDownload />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;

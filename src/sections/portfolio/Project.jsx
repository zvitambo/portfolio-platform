import PortfolioCard from "../../components/PortfolioCard";

const Project = ({ project }) => {
  return (
    <PortfolioCard className='portfolio__project' >
      <div className='portfolio__project-image'>
        <img src={project.image} alt='Portfolio Project' />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className='portfolio__project-cta'>
        <a
          href={project.demo}
          className='btn sm'
          target='_blank'
          rel='noopner noreferrer'
        >
          Demo
        </a>
        <a
          href={project.github}
          className='btn sm primary'
          target='_blank'
          rel='noopner noreferrer'
        >
          Gitbub
        </a>
      </div>
    </PortfolioCard>
  );
};

export default Project;

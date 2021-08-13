import React from 'react';
import { Link } from 'react-router-dom';
import { projectsLinks } from './projectsLinks';

const Projects = () => {
  return (
    <main>
      <h1 className="section-title">Projects</h1>
      <section className="card-container">
        {projectsLinks.map((project, index) => {
          return (
            <article className="card" key={index}>
              <div className="link-container">
                <Link to={project.path} className="link">
                  {project.name}
                  <p>
                    Explored Hooks:{' '}
                    <span className="hooks">{project.hooks}</span>
                  </p>
                  <div className="img-container">
                    <img src={project.img} alt={project.name} className="img" />
                  </div>
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Projects;

import React from 'react';
import Project from './Project';

const projects = [
    {
      title: 'Budgify',
      description: 'Full-Stack web application using Model, Views and Controllers.',
    //   imageSrc: 'book-search-engine.jpg',
      deployedLink: 'https://budgify-3a01649b95ad.herokuapp.com/',
      githubLink: 'https://github.com/jimen8930/Budgify.git'
    },
    {
        title: 'Tech Blog',
        description: 'Full-Stack tech blog application.',
        // imageSrc: 'tech-blog-project.jpg',
        deployedLink: 'https://jate-text-editor15-e077c2d0ee63.herokuapp.com/.',
        githubLink: 'https://github.com/jimen8930/PWA-Text-Editor-.git'
      },
      {
        title: 'The Recipe Bar',
        description: 'Cocktail recipe and entertainment generator.',
        // imageSrc: 'the-recipe-bar.jpg',
        // deployedLink: '',
        // githubLink: ''
      },
      {
        // title: 'BookMark',
        // description: 'Full-Stack book review application.',
        // imageSrc: 'book-mark.jpg',
        // deployedLink: '',
        // githubLink: ''
      },
      {
        title: 'Work Day Scheduler',
        description: 'Work Day Scheduler built using JavaScript, jQuery and DayJS.',
        // imageSrc: 'work-day-scheduler.jpg',
    //     deployedLink: '',
    //     githubLink: ''
      },
      {
        title: 'Password Generator',
        description: 'This is a password generator built on JavaScript.',
        // imageSrc: 'password-generator.jpg',
        // deployedLink: '',
        // githubLink: ''
      },
    ];
    const Portfolio = () => {
        return (
          <section id="portfolio" className="py-5 text-center d-flex justify-content-center align-items-center">
            <div className="container">
              <h2 className="text-center">Portfolio</h2>
              <div className="row">
                {projects.map((project, index) => (
                  <Project
                    key={index}
                    title={project.title}
                    description={project.description}
                    imageSrc={project.imageSrc}
                    deployedLink={project.deployedLink}
                    githubLink={project.githubLink}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      };
      
      export default Portfolio;
      

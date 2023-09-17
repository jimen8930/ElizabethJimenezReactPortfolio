import React from 'react';

const Project = ({ title, description, imageSrc, deployedLink, githubLink }) => {
    return (
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
        <img
            className="card-img-top"
            src={"./" + imageSrc}
            alt={title}
            style={{
              height: '134px',       
              objectFit: 'cover',
            }}
          />
          <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href={deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">View App</a>
          <a href={githubLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
};
export default Project;
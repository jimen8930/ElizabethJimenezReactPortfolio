import React from 'react';

const Resume = () => {
    return (
      <section id="resume" className="py-5 text-center">
        <div className="container">
          <h2 className="text-center">Resume</h2>
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card p-3">
                <div className="card-body">
                  {/* ... (other content) ... */}
                  <h4>Download Resume</h4>
                  <p>
                    Click the link below to download my resume in PDF format:
                  </p>
                  {/* <a
                    href=""
                    download=""
                    className="btn btn-primary"
                  >
                    Download Resume
                  </a> */}
                </div>
              </div>
              <div className="card mt-4 p-3">
                <div className="card-body">
                  <h4 className="tech-h4">Technologies I Know</h4>
                  <div className="row">
                    {technologies.map((tech, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div
                          className="p-3 text-center"
                          style={{ backgroundColor: tech.color, color: '#fff' }}
                        >
                          {tech.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Resume;
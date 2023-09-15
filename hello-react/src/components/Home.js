import React from 'react';

const Home = () => {
  return (
    <section id="home" className="py-5 text-center d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <h2>Welcome to My Portfolio</h2>
            <p>Bringing my ideas to life, one line of code at a time!</p>
          </div>
          <div className="col-md-4">
            <img src="./welcome.svg" alt="welcome" className="img-fluid custom-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
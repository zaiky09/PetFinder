import React from "react";

function Contact() {
  return (
      <div id="list">
          <section className="about-us">
          <div className="container" id="conta">
            
            <div className="album py-5 bg-light" id="list">
              <div className="container">
                  <div className="row">
                  <h1 className="text-center mb-5" id="header"> Contact Us </h1> 
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Telephone:</h5>
                    <p className="card-text"><em>+254721345678 / +254722098765</em></p>
                    <br></br>
                    <h5 className="card-title">Email Address:</h5>
                    <p className="card-text"><em>PetFinder@gmail.com</em></p>
                    <h5 className="card-title">Location:</h5>
                    <p className="card-text"><em>Head Office: 1st Floor Westlands.</em></p>
                    <p className="card-text"><em>Nairobi, Kenya</em></p>
                  </div>
              </div>
            </div>

          </div>
          </section>
      </div>
  );
}

export default Contact;
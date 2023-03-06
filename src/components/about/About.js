import React from "react";
import '../about/about.css';
import find from "../assets/find.png";
import a from "../assets/apet.png";
import pet from "../assets/pet.png";

function About(){
        
    return (
        <div id="list">
           <section className="about-us">
            <div className="container" id="conta">
              
              <div className="album py-5 bg-light" id="list">
                <div className="container">
                    <div className="row">
                    <h1 className="text-center mb-5" id="header"> About Us </h1> 

                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={find} className="card-img-top" alt="find.png"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={a} className="card-img-top" alt="paw.png"/>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={pet} className="card-img-top" alt="pet.png"/>
                            </div>
                        </div>
                        <div className="parabout">
                          <p>
                          <strong>PetFinder</strong> is an online platform that connects pet lovers with their furry, feathered or scaly companions. 
                          Our mission is to make <strong>pet adoption</strong> accessible and easy for everyone, while also promoting <strong>responsible pet ownership</strong>. 
                          We believe that every pet deserves a loving home, and we are passionate about helping you find the <strong>perfect match</strong> for you and your family. 
                          Join us in our commitment to making the world a better place, one pet at a time.
                          </p>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default About;
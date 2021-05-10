import React from 'react'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';


export default function About() {
  return (
    <>
      <Navbar />
        <div className="container">
          <br />
          <h1>About Me</h1>
          <div className="group">
            <div className="item-double info-box">
              {/* <div className="info-box"> */}
                <h5>Hello and welcome!</h5>
                <h6>My name is Frank Costelli...</h6>
                <p>
                  I am a full-stack software developer living in sunny Saint Petersburg, Florida!
                </p>
                <p>
                  For 20 years I have been a business manager and award-winning chef, but I was never satisfied
                  with the work. Working for smaller companies, I discovered that
                  I really enjoyed certain artistic and technical aspects of the
                  job, such as <strong>graphic and web design</strong>. Eventually
                  I became curious about coding and began
                  learning JavaScript and Python.
                </p>
                <p>
                  When I am not coding I am usually creating vivid illustrations
                  with software like Adobe Illustrator or Procreate. I also really
                  enjoy astronomy/astrophysics and reading about the latest
                  discoveries or newest technologies in the field.
                </p>
                <p>
                  I am a quick-study, committed and creative. It would be
                  awesome to connect with like-minded developers or even potential
                  employers. Reach out, and let's change the world, one block of
                  code at a time!
                </p>
              {/* </div> */}
            </div>
            <div className="item subgroup">
              <div className="item info-box">
                <div className="info-box" id="skill-list">
                  <h5>My Skills:</h5>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript ES6+</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>Java</li>
                    <li>Python</li>
                  </ul>
                </div>
              </div>
              <div className="item info-box">
                <div className="info-box" id="skill-list">
                  <h5>Education:</h5>
                    <p>Thinkful: <br />
                    <em>Full Stack Software Engineering</em></p>
                    <p>The International Academy of Design and Technology: <br />
                    <em>Digital Media Production</em></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </>
  )
}

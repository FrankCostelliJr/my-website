import React from 'react';
import Navbar from '../Common/Navbar';
import Typed from "react-typed";
import Particles from 'react-particles-js';
import myPhoto from '../me3.jpeg';
import Footer from '../Common/Footer';

export default function Home() {
  return (
    <>
      <Particles 
        params={{
          particles: {
            number: {
              value: 15, 
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'square',
              stroke: {
                width: 15,
                color: '#8010a2',
              }
            }
            
          }
        }}
        />
      <Navbar />
        <div className="main-info">
          <img src={myPhoto} alt="Myself" className='img' />
          <h1>Full Stack Software Developer</h1>
          <br />
          <Typed 
            className='typed-text'
            strings={[
              'Web Development',
              'Web Design',
              'Web Applications',
              'Graphic Design',
              'Logo Design'
            ]}
            typeSpeed={30}
            backSpeed={50}
            loop/>
            <br />
        <a href="/contact">CONTACT ME</a>
        <Footer />
        </div>
    </>
  )
}

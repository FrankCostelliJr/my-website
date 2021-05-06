import React from 'react';
import Navbar from '../Common/Navbar';
import Typed from "react-typed";
import Particles from 'react-particles-js';

export default function Home() {
  return (
    <>
      <Particles 
        params={{
          particles: {
            number: {
              value: 30, 
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'square',
              stroke: {
                width: 25,
                color: '#8010a2',
              }
            }
            
          }
        }}
        />
      <Navbar />
      <div className="page-wrapper">
        <div className="main-info">
          <h1>Creative Software Solutions</h1>
          <br />
          <Typed 
            style={{color: 'var(--primary-purple'}}
            className='typed-text'
            strings={[
              'Web Development',
              'Web Design',
              'Graphic Design',
              'Logo Design'
            ]}
            typeSpeed={30}
            backSpeed={50}
            loop/>
            <br />
        <a href="/contact" style={{
            border: '3px solid var(--primary-blue)',
            textDecoration: 'none',
            padding: '.75rem .75rem .75rem .75rem',
            backgroundColor: 'var(--primary-dark)',
            color: 'var(--primary-white)',
            marginTop: '10px',
            }}>CONTACT ME</a>
        </div>
      </div>

    </>
  )
}

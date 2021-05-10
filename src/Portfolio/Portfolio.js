import React from 'react';
import Navbar from '../Common/Navbar';
import photo from '../me3.jpeg';

export default function Portfolio() {
  return (
    <>
    <Navbar />

    <div className="container">
      <br />
      <h1>My Portfolio</h1>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={photo} alt="First slide"></img>
            <div class="carousel-caption d-md-block">
              <h5>This is a sample project heading</h5>
              <p>This is a sample project caption text</p>
            </div>
          </div>
          <div className="carousel-item" id="carousel-image">
            <img className="d-block w-100" src={photo} alt="Second slide"></img>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={photo} alt="Third slide"></img>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span></a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span></a>
        </div>    
      </div>
    </div>
  </>
  )
}

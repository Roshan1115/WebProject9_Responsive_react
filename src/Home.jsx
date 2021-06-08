import React from 'react'
import { NavLink } from 'react-router-dom';
import firstImg from './image/first.png'

const Home = () => {
  return(
    <section id="header" className="">
      <div className="container-fluid nav_bg">
        <div className="col-10 mx-auto">
          <div className="row">
         
          <div className="col-md-6 pt-6 pt-lg-0 mt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Hello this is <strong className="brand-name">Roshan Bishi.</strong></h1>
              <h2 className="my-3">I am trying to be a talented developer.</h2>
              <div className="mt-3">
              <NavLink className="btn btn-outline-primary " to="/about">Get Started</NavLink>
            </div>
        </div>

        <div className="col-md-6 order-1 order-lg-2 header-img">
          <img src={firstImg} alt="My photu" className="iamge-fluid animated" />
        </div>

        </div>
      </div>
      </div>
    </section>
  )
}
 export default Home;
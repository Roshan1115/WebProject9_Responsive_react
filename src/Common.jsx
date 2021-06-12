import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {


  return(
    <section id="header" className="">
      <div className="container-fluid nav_bg mt-5">
        <div className="col-10 mx-auto">
          <div className="row">
         
          <div className="col-md-6 pt-6 pt-lg-0 mt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>{props.titleName}<strong className="brand-name">{props.myName}</strong></h1>
              <h2 className="my-3">{props.intro}</h2>
              <div className="mt-3">
              <NavLink className="btn btn-outline-danger " to={props.nextLink}>{props.btnText}</NavLink>
            </div>
        </div>

        <div className="col-md-6 order-1 order-lg-2 header-img">
          <img src={props.imgLink} alt="My photu" className="iamge-fluid animated" />
        </div>

        </div>
      </div>
      </div>
    </section>
  )
}
 export default Common;
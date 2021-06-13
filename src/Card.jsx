import React from 'react'

const Card = (props) => {
  return(
    <div className="card mx-lg-2 my-lg-2 my-4" style={{width : "18rem"}}>
      <img src= {props.cerImg} className="card-img-top" alt="my pic" />
        <div className="card-body">
          <p className="card-text"> {props.cerContent} </p>
        </div>
      </div>
  )
}
 export default Card;
import React from 'react'
import Card from './Card'
import Cer_data from './CerData'


const Certificates = () => {
  return(
    <div className="container-fluid my-5 col-lg-11 d-flex justify-content-evenly flex-wrap">

      {Cer_data.map((curElement, index) => {
        return(
          <Card
            key = {index}
            cerImg = {curElement.cerImg}
            cerContent = {curElement.cerContent}
          />
        )
      })}

    </div>
  )
}
 export default Certificates;
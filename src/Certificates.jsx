import React from 'react'
import Card from './Card'

//images of certificates
import first from './image/first.png'
import second from './image/second.png'
import third from './image/third.jpg'
import fourth from './image/fourth.jpg'
import sixth from './image/sixth.png'


const Certificates = () => {
  return(
    <div className="container-fluid my-5 col-lg-11 d-flex justify-content-evenly flex-wrap">

      <Card
        cerImg = {first}
        cerContent = "This is my first certificate which I got from incubateIND in collaboration with github."
       />
      <Card
        cerImg = {second}
        cerContent = "For the participation of incubateIND Tech Camp in association with github."
       />
      <Card
        cerImg = {third}
        cerContent = "This is for the password hunt event that our university organised and our team was the second."
       />
      <Card
        cerImg = {fourth}
        cerContent = "This is the ds algo with python organised by NPTEL AND SWAYAM and I got 85% in that."
       />
      <Card
        cerImg = {sixth}
        cerContent = "In participation with hackathon with my team TRAP.Got so much to learn from there."
       />

    </div>
  )
}
 export default Certificates;
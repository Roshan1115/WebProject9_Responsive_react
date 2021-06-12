import React from 'react'
import Common from './Common'
import img from './image/2.png'

const Home = () => {
  return(
    <>
    <Common
      titleName ="I am a "
      myName ="B Tech Student "
      intro = "I have a collection of certificate here."
      imgLink = {img}
      btnText = "Learn More"
      nextLink = '/certif'
    />
    </>
  )
}
 export default Home;
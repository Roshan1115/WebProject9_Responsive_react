import React from 'react'
import Common from './Common'
import img from './image/1.png'

const Home = () => {
  return(
    <>
    <Common
      titleName ="Hello this is "
      myName ="Roshan Bishi"
      intro = "I am trying to be a talented developer."
      imgLink = {img}
      btnText = "Get Started"
      nextLink = '/about'
    />
    </>
  )
}

export default Home;
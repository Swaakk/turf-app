import React from 'react'
import "../styles/BodyOne.css"
import kerala from "../images/kisspng-kerala-map-5b1381068a5b44.5537405815280048705667.png"
import dev from "../images/IMG_20220302_211914 (1).jpg"

function Bodyone() {
  return (
    <div className='bg-1'>
      <div className='content'>
        <h1>We have Turf booking facility <br /> all over kerala</h1>
        <img src={kerala} alt="" />
        <h2>We are a talented developers making <br /> your playspot easily accessible</h2>
      </div>
      <div className='dev-1'>
        <h3>Swathy krishna</h3><p>Frontend Developer</p>
        <img src={dev} alt="" />
      </div>
      <div className='dev-2'>
        <h3>Swathy krishna</h3><p>Frontend Developer</p>
        <img src={dev} alt="" />
      </div>
      <div className='dev-3'>
        <h3>Swathy krishna</h3><p>Frontend Developer</p>
        <img src={dev} alt="" />
      </div>
    </div>
  )
}

export default Bodyone
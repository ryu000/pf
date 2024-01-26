import React from 'react'
import cw from '../Css/works.module.css'

import { Link } from "react-router-dom";
import image_1 from "../images/p-pic1.png"
import image_2 from "../images/p-pic2.png"
import image_3 from "../images/p-pic3.png"
import image_4 from "../images/p-pic4.png"
import image_5 from "../images/p-pic5.png"
import image_6 from "../images/p-pic6.png"
import image_7 from "../images/p-pic7.png"
import image_8 from "../images/p-pic8.png"
import image_9 from "../images/p-pic9.png"
import image_10 from "../images/p-pic10.png"
import image_11 from "../images/p-pic11.png"
import image_12 from "../images/p-pic12.png"
import image_13 from "../images/p-pic13.png"
import image_14 from "../images/p-pic14.png"


const Works = () => {
  return (
    <div id="works-top">

      <header className={cw.wrapper}>
        <h2 className={cw.header_title}>works</h2>
      </header>

      <main className={`${cw.works} ${cw.wrapper}`}>
        <ul>
          <li><Link to="/works"><img src={image_1} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_2} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_3} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_4} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_5} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_6} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_7} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_8} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_9} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_10} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_11} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_12} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_13} alt="" /></Link></li>
          <li><Link to="/works"><img src={image_14} alt="" /></Link></li>
        </ul>
      </main>
    </div >
  )
}

export default Works
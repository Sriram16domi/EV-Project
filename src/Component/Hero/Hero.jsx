import React from "react"
import './Hero.css'
import Arrow from '../../assets/arrow_btn.png'
import Pause from'../../assets/pause_icon.png'
import Play from'../../assets/play_icon.png'
const Hero=({herodata,herocount,setherocount,playstatus,setplaystatus})=> {
    return(
        <>
        <div className="Hero">
            <div className="Hero-contents">
                <p>{herodata[0].text1}</p>
                <p>{herodata[0].text2}</p>
            </div>
            <div className="hero-Explore">
                <p>Explore The Feauture</p>
                <img src={Arrow} alt="" />
            </div>
            <div className="Hero-dots">
                <div className="Dots">
                    <ul>
                       <li onClick={()=>setherocount(0)}className={herocount===0?"Hero-dots-orange":"Hero-dot"}></li>
                       <li onClick={()=>setherocount(1)}className={herocount===1?"Hero-dots-orange":"Hero-dot"}></li>
                       <li onClick={()=>setherocount(2)}className={herocount===2?"Hero-dots-orange":"Hero-dot"}></li>
                    </ul>
                </div>
                <div className="Hero-play-pause">
                    <img onClick={()=>setplaystatus(!playstatus)}src={playstatus?Play:Pause} alt="" />
                </div>
            </div>
        </div>    
        </>
    )
}
export default Hero
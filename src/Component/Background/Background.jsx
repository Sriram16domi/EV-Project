import React from "react"
import './Background.css'
import video1 from '../../assets/video1.mp4'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
function Background({playstatus,herocount}){
    if(playstatus){
        return(
            <>
             <video className="background" autoPlay loop muted src={video1}>
             </video>
            </>
        )
    }
    else if(herocount===0){
        return <><img src={image1} className="background" alt=""></img></>
    }
    else if(herocount===1){
        return <><img src={image2} className="background" alt=""></img></>
    }
    else if(herocount===2){
        return <><img src={image3} className="background" alt=""></img></>
    }
}
export default Background
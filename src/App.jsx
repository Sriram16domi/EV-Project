import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Component/Background/Background'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
  
function App() {
  let herodata=[
    {text1:"Dive into",text2:"What You Love"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give in to",text2:"Your Passion"}
  ]
  const [herocount,setherocount]=useState(2);
  const [playstatus,setplaystatus]=useState(false);
  return (
  <>
   <Navbar/>
   <Background playstatus={playstatus} herocount={herocount}/>
   <Hero herodata={herodata} 
         herocount={herocount} 
         setherocount={setherocount}
         playstatus={playstatus}
         setplaystatus={setplaystatus}
   />


  
  </>
  )
}

export default App

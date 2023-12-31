import React, { useEffect } from 'react'
import './home.css'
import videoBg from '../../assets/video.mp4'
import {GrLocation} from 'react-icons/gr'
import {FaFilter } from 'react-icons/fa'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbAppsFilled} from 'react-icons/tb'



import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])




  return (
   <section className="home">
    <div className="overlay"></div>
    <video  autoPlay loop  muted >
    <source src={videoBg} type='video/mp4'/>
</video>
 


<div className="homeContent container">
      <div className="textDiv">
        <span  data-aos="fade-up" className="smallText ">
          Our Packages
           </span>

       <h1 data-aos="fade-up" className="homeTitle">
        Search your Holiday
       </h1>

      </div>

      <div data-aos="fade-up" className="cardDiv grid">
      
<div className="destinationInput">
   <label htmlFor="text">Search your destination:</label>
  <div className="input flex">
 <input type="text" placeholder='Enter name here..' id="text" />
 <GrLocation className="icon"/>
  </div>
</div>

<div className="dateInput">
  <label htmlFor="date" id='date  ' >Select your date:</label>
  <div className="input flex">
 <input type="date" id="date" />
 
  </div>
</div>

<div className="priceInput">
  <div className="label_total flex">
  <label htmlFor='price'>Max price: 
  <h3 className="total"> $5000</h3></label>
  {/* <h3 className="total"> $5000</h3> */}
  </div>
  <div className="input flex">
    <input type='range' max="5000" min="1000" id="price"></input>
  </div>
</div>

<div className="searchOptions flex ">
  <FaFilter className="icon"/>
  <span >MORE FILTERS</span>
</div>

 </div> 
 <div data-aos="fade-up" className="homeFooterIcons flex">
  <div className="rightIcons">
    <FiFacebook className="icon"/>
    <AiOutlineInstagram className="icon"/>
    <SiTripadvisor className="icon"/>
  </div>
  <div className="leftIcons">
    <BsListTask className="icon"/>
    <TbAppsFilled className="icon"/>
  </div>
 </div>
 </div> 
 </section>
  )
}

export default Home
       
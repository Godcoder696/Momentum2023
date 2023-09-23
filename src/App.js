import './App.css';
import HomePage from './components/homepage/HomePage';
import AboutUs from './components/AboutUs/AboutUs';
import {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import momentum23 from './components/assets/momentum23.mp4';
import EventHomePage from './components/EventHomePage/EventHomePage';
import Sponsors from './components/Sponsors/Sponsors';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import AllEvent from './components/AllEvents/AllEvent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <>
      
      <BrowserRouter>
        <Routes >
          <Route path="/" element={
          <>
            <HomePage></HomePage>
            <AboutUs></AboutUs>
            <video src={momentum23} className='momentum23Video' autoPlay muted loop data-aos="zoom-in"></video>
            <EventHomePage></EventHomePage>
            <Sponsors></Sponsors>
            <FAQ></FAQ>
            <Footer></Footer>
          </>}/>
          <Route path='/seeAll' element={<AllEvent></AllEvent>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

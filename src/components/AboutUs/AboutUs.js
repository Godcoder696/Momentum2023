import  './css/AboutUsCss.css';
import NCULogo from './images/NCU-2.png'
import TwinklingStars from '../TwinklingStars/TwinklingStars';

export default function AboutUs(params) {
    
    return(
        <>
            <div className="aboutUsWrapper" >
            <TwinklingStars></TwinklingStars>
                <div className="aboutWrapper" id='aboutUsWrapper'>
                    <div className="aboutUsDescription" >
                        <div className="poweredBy" data-aos="fade-right">POWERED BY</div>
                        <div className="ncuName" data-aos="zoom-out">THE NORTHCAP UNIVERSITY</div>
                        <div className="ncuAddress" data-aos="zoom-out">Based in Gurgaon, Haryana</div>
                        <div className="ncuDescription" data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint modi voluptas ab porro minima nihil natus, quam voluptatum expedita amet. Illo, voluptatum numquam?</div>
                    </div>
                    <img src={NCULogo} alt="" data-aos="zoom-in"/>
                </div>
            </div>
        </>
    )
};

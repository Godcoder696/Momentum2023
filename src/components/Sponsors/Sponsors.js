import "./css/sponsorsCss.css";
import Addidas from './images/Addidas.png'
import TwinklingStars from "../TwinklingStars/TwinklingStars"

export default function Sponsors(params) {
    return(
        <>
            <div className="sponsorWrapper" id="sponsorWrapper">
            {/* <TwinklingStars></TwinklingStars> */}
                <div className="sponsoredBy" data-aos="fade-right">
                    SPONSERED BY
                </div>
                <div className="sponsors">
                    <div className="strip sponsorStrip1" data-aos="fade-left">
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                    </div>
                    <div className="strip sponsorStrip2" data-aos="fade-right">
                    <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                        <img src={Addidas} alt="" className="sponsor"/>
                    </div>
                </div>
            </div>
        </>
    )
};

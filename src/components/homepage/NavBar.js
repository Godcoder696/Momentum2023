import "./css/HomePageCss.css"
import MomentumLogo_2023 from './images/MomentumLogo_2023.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.png';

export default function NavBar(params) {
    return(
        <>
            <nav data-aos="fade-down">
                <img src={MomentumLogo_2023} alt="" className="MomentumLogo2023" data-aos="fade-right" />
                <div className="navigateButtons">
                    <a href="#aboutUsWrapper">
                        <div className="navButtons">ABOUT US</div>
                    </a>
                    <a href="#eventHomePageWrapper">
                       <div className="navButtons">EVENTS</div>
                    </a>
                    <a href="#sponsorWrapper">
                        <div className="navButtons">SPONSORS</div>
                    </a>
                    <a href="#faqWrapper">
                        <div className="navButtons">FAQ</div>
                    </a>
                </div>
                <div className="socials">
                    <a href="https://instagram.com/ncumomentum?igshid=MzRlODBiNWFlZA==" target="_blank"><img src={instagram} alt="" className="social"/></a>
                    <a href="https://www.linkedin.com/school/the-northcap-university-ggn/ " target="_blank"><img src={linkedin} alt="" className="social"/></a>
                    <a href="https://instagram.com/ncumomentum?igshid=MzRlODBiNWFlZA==" target="_blank"><img src={twitter} alt="" className="social"/></a>
                </div>
            </nav>
        </>
    )
};

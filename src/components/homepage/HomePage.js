import ShootingStars from "../TwinklingStars/ShootingStars"
import NavBar from "./NavBar"
import "./css/HomePageCss.css"

export default function HomePage(params) {
    return(
        <>
            <div className="homePageWrapper">
                <NavBar></NavBar>
                <ShootingStars></ShootingStars>
                <div className="momemtumHeading customTextHeading" data-aos="zoom-in">
                    MOMENTUM 2023
                </div>
            </div>
        </>
    )
};

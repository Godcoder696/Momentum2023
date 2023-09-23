import '../EventHomePage/css/EventHomePageCss.css';
import HomePageEventCard from './HomePageEventCard';
import video1 from '../assets/123.mp4';
import video2 from '../assets/124-1.mp4';
import video3 from '../assets/video1.mp4'
import video4 from '../assets/video2.mp4';
import TwinklingStars from '../TwinklingStars/TwinklingStars';
import { Link } from 'react-router-dom';

export default function EventHomePage(params) {
    return(
        <>
            <div className="eventHomePageWrapper" id='eventHomePageWrapper'>
            <TwinklingStars></TwinklingStars>
                <div className="eventHeading" data-aos="fade-left">
                    OUR EVENTS
                </div>
                <div className="homePageEvent">
                    <div className='eventRow'>
                        <HomePageEventCard videoUrl={video1} aos="fade-right"></HomePageEventCard>
                        <HomePageEventCard videoUrl={video2} aos="fade-left"></HomePageEventCard>
                    </div>
                    <div className='eventRow'>
                        <HomePageEventCard videoUrl={video3} aos="fade-right"></HomePageEventCard>
                        <HomePageEventCard videoUrl={video4} aos="fade-left"></HomePageEventCard>
                    </div>
                </div>
                <div className="seeAll" data-aos="zoom-in">
                    <Link to={"seeAll"}>
                        SEE ALL
                    </Link>
                </div>
                <TwinklingStars></TwinklingStars>
            </div>
        </>
    )
};

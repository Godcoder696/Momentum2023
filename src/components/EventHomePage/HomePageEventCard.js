import video1 from '../assets/123.mp4';
import video2 from '../assets/124-1.mp4';
import video3 from '../assets/video1.mp4'
import video4 from '../assets/video2.mp4';
import "./css/EventHomePageCss.css"

export default function HomePageEventCard(params) {
    return(
        <>
            <div className="homePageCard" data-aos={params.aos}>
                <video src={video1} className='eventVideo' loop muted autoPlay></video>
                <div className="eventDescription">
                    <div className="eventType" data-aos="fade-down">Night Event</div>
                    <div className="eventName" data-aos="fade-down">DJ NIGHT</div>
                    <div className="eventDesc" data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequatur?</div>
                </div>
            </div>
        </>
    )
};

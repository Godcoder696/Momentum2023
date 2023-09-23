import TwinklingStars from "../TwinklingStars/TwinklingStars"
import "./css/faqCss.css"

export default function FAQ(params) {
    return(
        <>
            {/* <TwinklingStars></TwinklingStars> */}
            <div className="faqWrapper" id="faqWrapper">
                <div className="faqHeader"  data-aos="fade-right">
                    FAQs
                </div>
                <div className="allFAQ">
                    <div className="faq"  data-aos="fade-down">How do I confirm my participation in the fest ?</div>
                    <div className="faq" data-aos="fade-down">How is Momentum being conducted this year ?</div>
                    <div className="faq" data-aos="fade-down">How is Momentum being conducted this year ?</div>
                    <div className="faq" data-aos="fade-down">Who can attend Momentum ?</div>
                    <div className="faq" data-aos="fade-down">Will there be food stalls in the fest ?</div>
                    <div className="faq" data-aos="fade-down">Can we refund registration fee if we did not attend the event ?
</div>
                </div>
            </div>
        </>
    )
};

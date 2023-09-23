import './css/AllEventsCss.css';
import categories from '../categories.json';
import eventslist from './eventslist.json';
import { useEffect, useState } from 'react';
import sample from './images/bloodydaddyshahidkapoor31681304057.webp'

export default function AllEvent(params) {
    let [category,setCategory]= useState("All");
    let [id,setId]= useState(0);
    let [name,setName]= useState("");
    let [eventName,setEventName]= useState('');
    let [shortDesc,setShortDesc]= useState("");
    let [eventType,setEventType]= useState("");
    let [amount,setAmount]= useState("");
    let [teamSizeMin,setTeamSizeMin]= useState(0);
    let [teamSizeMax,setTeamSizeMax]= useState(0);
    let [desc,setDesc]= useState("");
    let [rules,setRules]= useState("");
    let [whatsappLink,setWhatsappLink]= useState("");
    let [mulCategory,setMulCategory]= useState("");
    let [isRegOpen,setIsRegOpen]= useState("");
    let [showCard,setShowCard]= useState(0);

    function changeCategory(event){
        setCategory(event.target.id);
    }
    function changeDetails(event){
        setId(event.target.id);

    }
    useEffect(()=>{
        setEventName(eventslist[id].name);
        setShortDesc(eventslist[id].shortDesc);
        setEventType(eventslist[id].eventType);
        setAmount(eventslist[id].amount);
        setTeamSizeMin(eventslist[id].teamSizeMin);
        setTeamSizeMax(eventslist[id].teamSizeMax);
        setDesc(eventslist[id].desc);
        setRules(eventslist[id].rules);
        setWhatsappLink(eventslist[id].whatsappLink);
        setMulCategory(eventslist[id].categories);
        setIsRegOpen(eventslist[id].isRegOpen);
        setShowCard(1);
    },[id])
    return(
        <>
        <div className="allEventsPage">
            <div className="aboutEvent">
                <img src={sample} alt="" />
                <div className="aboutEventDescription">
                    <div className="aboutEventHead">{eventName}</div>
                    <div className="aboutEventShortDescription">{shortDesc}</div>
                    <div className="aboutEventDesc">{desc}</div>
                    <div className="eventRules">
                        Rules: <br />
                        {rules}
                    </div>
                    
                </div>
                <div className="aboutEventFooter"> </div>  
            </div>
            <div className="eventCategory">
                <div className="eventCategoryHead">
                    CATEGORY
                </div>
                <div className="categories">
                    <div className="category" id='All' onClick={changeCategory}>All</div>
                    {
                        categories.map((c)=>{
                            return(
                                <>
                                    <div className="category" id={c} onClick={changeCategory}>{c}</div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className="events">
                <div className="eventHeader">
                    {category}
                </div>
                <div className="eventCardWrapper">
                    {
                        eventslist.map((a)=>{
                        if(category==="All"){
                            return(
                            <>
                                <div className="eventCard" id={a.id} onClick={changeDetails}>
                                    <div className="eventDiv" id={a.id} onClick={changeDetails}>
                                        <div className="eventName" id={a.id} onClick={changeDetails}>{a.name}</div>
                                        <div className="eventDescr" id={a.id} onClick={changeDetails}>{a.shortDesc}</div>
                                        <div className="eventFee" id={a.id} onClick={changeDetails}>₹{a.amount}</div>
                                    </div>
                                </div>
                            </>
                            )
                        }
                        else if(a.categories.includes(category)){
                            return(
                            <>
                                <div className="eventCard" id={a.id} onClick={changeDetails}>
                                    <div className="eventDiv" id={a.id} onClick={changeDetails}>
                                        <div className="eventName" id={a.id} onClick={changeDetails}>{a.name}</div>
                                        <div className="eventDescr" id={a.id} onClick={changeDetails}>{a.shortDesc}</div>
                                        <div className="eventFee" id={a.id} onClick={changeDetails}>₹{a.amount}</div>
                                    </div>
                                </div>
                            </>
                            )
                        }
                    })
                    } 
                </div>
            </div>
        </div>
    </>
    )
};

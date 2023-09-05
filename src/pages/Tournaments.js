
import React from 'react'
import AppNavBar from '../components/AppNavBar';
import { Row, Col } from "react-bootstrap";
import ListBar from '../components/ListBar';
import iconCalendar from "../assets/Google Calendar.png";
import headerBg from "../assets/header.png"
import Footer from '../components/Footer';

function Tournaments() {
  return (
    <div className='cont-events'>
    <AppNavBar/>
        <div>
            <img src={headerBg} alt="" />
        </div>
        <Row>
            <Col lg={2}>
                <div className='sticky-list'><ListBar/></div>
            </Col>
            <Col lg={10}>
                <Row className='px-5 pb-5 eventsFonts'>
                <h1 className='border-bottom px-5 pb-5 pt-4'>Tournaments<br/><span>*Schedules may change without prior notice.</span></h1>
                    <Col sm={1} md={6} className='texts px-5 pt-5'>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 17, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Oriental Pavillion<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Cebu<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Grand Regal<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Oriental Pavillion<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 17, 2023</h5>
                           <h4>24/7 SLOTS CHALLENGE</h4>
                           <p>Venue: Oriental Pavillion<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 18, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Angeles, Cebu, Mactan, Grand Regal, Olongapo<br/><span><small>Slot Machine Tournament</small></span></p>
                        </div>
                    </Col>
                    <Col sm={1} md={6} className='texts px-5 pt-5'>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>GABBY CONCEPCION LIVE!</h4>
                           <p>Time: 8:00 PM Venue: Oriental Pavillion<br/><span><small>Celebrity Show</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Iloilo<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>POINTS TO PLAY SUPER6 TOURNAMENT</h4>
                           <p>Venue: Iloilo<br/><span><small>Table Games Tournament</small></span></p>
                        </div>
                        <div>
                           <h5><span><img src={iconCalendar} className='pe-2' /></span>August 19, 2023</h5>
                           <h4>GABBY CONCEPCION LIVE!</h4>
                           <p>Time: 8:00 PM Venue: Oriental Pavillion<br/><span><small>Celebrity Show</small></span></p>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Footer/>
        </Row>
</div>
  )
}

export default Tournaments
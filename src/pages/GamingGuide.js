import React from 'react'
import Headers from '../components/Headers'
import AppNavBar from '../components/AppNavBar'
import { Row, Col } from "react-bootstrap"
import Baccarat from "../assets/GamingGuide/baccarat.png"
import BlackJack from "../assets/GamingGuide/blackjack.png"
import BigAndSmall from "../assets/GamingGuide/bigAndSmall.png"
import BonusBaccarat from "../assets/GamingGuide/bonusbaccarat.png"
import StudPoker from "../assets/GamingGuide/studPoker.png"
import Pontoon from "../assets/GamingGuide/pontoon.png"
import NoCommisionBaccarat from "../assets/GamingGuide/noCommbaccarat.png"
import Roullete from "../assets/GamingGuide/roulette.png"
import PaiGow from "../assets/GamingGuide/paiGow.png"
import Responsible from "../assets/GamingGuide/responsible.png"
import ListBar from '../components/ListBar'
import Footer from '../components/Footer'

function GamingGuide() {
  return (
    <div className="cont-gamingGuide">
       <AppNavBar />
       <div>
            <Headers/>
        </div>
        <Row>
            <Col lg={2}>
                <div className='sticky-list'><ListBar/></div>
            </Col>
            <Col lg={10}>
                <div className='p-5 gamingGuidesFonts'>
                <h1 className='px-5 pb-5 pt-4'>Gaming Guide</h1>
                    <Row className='border-bottom'>
                        <Col sm={1} md={4} className='pt-4'>
                            <div className='mb-3 text-center'>
                                <img src={Baccarat} alt="" />
                                <h5>Baccarat<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={BlackJack} alt="" />
                                <h5>Blackjack<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={BigAndSmall} alt="" />
                                <h5>Big and Small<br/><span>How to Play</span></h5>
                            </div>
                        </Col>
                        <Col sm={1} md={4} className='pt-4'>
                            <div className='mb-3 text-center '>
                                <img src={BonusBaccarat} alt="" />
                                <h5>Bonus Baccarat<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={StudPoker} alt="" />
                                <h5>Stud Poker<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={Pontoon} alt="" />
                                <h5>Pontoon<br/><span>How to Play</span></h5>
                            </div>
                        </Col>
                        <Col sm={1} md={4} className='pt-4'>
                            <div className='mb-3 text-center '>
                                <img src={NoCommisionBaccarat} alt="" />
                                <h5>No Commission Baccarat<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={Roullete} alt="" />
                                <h5>Roullete<br/><span>How to Play</span></h5>
                            </div>
                            <div className='mb-3 text-center '>
                                <img src={PaiGow} alt="" />
                                <h5>Pai Gow<br/><span>How to Play</span></h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='p-5 gamingGuidesFonts'>
                    <Row>
                        <h1>Responsible Gaming</h1>
                        <Col className='pt-5'>
                            <h2>PAGCOR is committed to making casino experience fun while promoting responsible gaming practices.The following are not allowed in the casino premises:
                            <span>
                                <ul className='p-5'>
                                    <li>Persons under 21 years old; students of any school, college, or university</li>
                                    <li>Government officials and their immediate relatives (spouses, children, and parents)</li>
                                    <li>Members of the Armed Forces of the Philippines (AFP) and the Philippine National Police (PNP) and their immediate relatives (spouses, children, and parents)</li>
                                </ul>
                            </span>
                            </h2>
                        </Col>
                        <Col>
                            <div className='responsible d-flex justify-content-center'>
                                <img src={Responsible} alt="" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Footer/>
        </Row>
    </div>
  )
}

export default GamingGuide
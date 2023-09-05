import React from 'react'
import AppNavBar from '../components/AppNavBar'
import ListBar from '../components/ListBar'
import Headers from '../components/Headers'
import { Row, Col } from "react-bootstrap"
import Footer from '../components/Footer'

function ResponsibleGaming() {
  return (
    <div className='cont-responsibleGaming'>
        <AppNavBar/>
        <div>
            <Headers/>
        </div>
        <Row>
            <Col lg={2}>
                <div className='sticky-list'><ListBar/></div>
            </Col>
            <Col lg={10}>
                <div className='p-5 responsibleFonts'>
                    <h6 className='mb-5'>Responsible Gaming</h6>
                    <div className='mb-4'>
                        <h1>OUR COMMITMENT</h1>
                        <p>PAGCOR is committed to making casino experience fun while promoting responsible gaming practices.</p>
                    </div>
                    <div className='mb-4'>
                        <h1>WHAT IS GAMING</h1>
                        <p>Gaming refers to activities which involve wagering, odds and prizes. While it is considered a form of entertainment, gaming can have a negative impact on the player, his family and community when done inordinately.</p>
                    </div>
                    <div className='mb-4'>
                        <h1>WHO ARE NOT ALLOWED INSIDE THE GAMING PREMISES</h1>
                        <ul>
                            <li>Persons under 21 years old; students of any school, college, or university</li>
                            <li>Government officials and their immediate relatives (spouses, children, and parents)</li>
                            <li>Members of the Armed Forces of the Philippines (AFP) and the Philippine National Police (PNP) and their immediate relatives (spouses, children, and parents)</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h1>COMMON MYTHS ABOUT GAMING</h1>
                        <p>People tend to be superstitious in gaming, unaware of the fact that gaming myths may pose possible problems among casino players. Some of these myths are:</p>
                        <ul>
                            <li>A guy won millions with his last hundred peso chips; the same can happen to me.</li>
                            <li>By continuing to gamble, luck will turn and I'll win back what I lost.</li>
                            <li>I have devised a special strategy that can beat the odds.</li>
                            <li>Some slot machines are hot and the big jackpot is due to get hit.</li>
                            <li>My ability to pick the right cards will help me guess which side to bet on.</li>
                            <li>Bringing lucky charms will make me win.</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h1>WHEN DOES GAMBLING BECOME A PROBLEM</h1>
                        <p>Gambling becomes a problem when a player develops an uncontrollable urge to gamble which may lead one to incur debts or even inflict harm on one's family or community.</p>
                    </div>
                    <div className='mb-4'>
                        <h1>WHAT ARE THE SIGNS OF GAMBLING ADDICTION</h1>
                        <p>Gambling addiction causes disruptions in the psychological, physical, social and vocational areas of life. It is characterized by the following behavior:</p>
                        <ul>
                            <li>Increasing obsession with gambling.</li>
                            <li>A need to bet more money much frequently.</li>
                            <li>Restlessness or irritability when attempting to stop.</li>
                            <li>Chasing losses</li>
                            <li>Loss of control as a result of continued gambling behavior in spite of mounting, serious and negative consequences.</li>
                        </ul>
                    </div>
                    <div className='mb-4'>
                        <h1>WHY DOES CASINO FILIPINO PROMOTE RESPONSIBLE GAMING</h1>
                        <p>Casino Filipino promotes responsible gaming to prevent potential harm to the individual players and the community.
                        One important component of responsible gaming is the implementation of the <span className='text-warning'>"Player Exclusion Program"</span> The program aims to provide patrons with the option of getting barred from all gaming venues or sites once they feel that they themselves or their relatives are developing a problem with gambling.</p>
                    </div>
                    <div className='mb-4'>
                        <h1>TIPS ON RESPONSIBLE GAMING</h1>
                        <div>
                            <ul>
                                <li>Know the games.</li>
                                <p>Refrain from wagering before you understand how a game is played and the odds of winning. Feel free to ask casino staff about game rules and chances.</p>
                                <li>Plan your activity.</li>
                                <p>There are alternative pastimes that can be just as relaxing or as enjoyable as gambling. Going to the casino is just one among many leisure activities.</p>
                                <li>Set a time and money limit.</li>
                                <p>Plan your playing schedule with a definite time to stand up and leave. Why not set an alarm to remind you? You can also arrange for someone to pick you up after an hour or two.</p>
                                <li>Be conscious of yourself.</li>
                                <p>Start your play in a relaxed state and with a clear mind. Don't be rash. While playing, quick decisions made under stress or in moments of high emotion can be harmful.</p>
                                <li>Keep a healthy social mindset.</li>
                                <p>Don't take the games too seriously. Being more open and friendly to people you play with makes gaming more fun and exciting.</p>
                            </ul>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h1>WHERE TO SEEK HELP FOR GAMBLING-RELATED CONCERNS</h1>
                        <p>We have setup a 24/7 helpline to help with problem gambling concerns:</p>
                        <div>
                            <h3>Casino Filipino RG Helpline:</h3>
                            <h3>(02) 8404 0171</h3>
                            <h3>Or you may email us at keepitfun@pagcor.ph</h3>
                        </div>
                        <p>Casino Filipino has tied up with support facilities to address concerns related to gambling problems. You may directly contact the following help centers:</p>
                        <p>
                        Life Change Recovery Center<br/>
                        Dr. Randy Misael S. Dellosa<br/>
                        105 Scout Rallos Street, Kamuning<br/>
                        Brgy. Sacred Heart, Quezon City<br/>
                        Telephone numbers: (02) 3415-7964 / 3415-6529<br/>
                        Website: www.lifechangerecoverycenter.com
                        </p>
                        <p>
                        Bridges of Hope Drugs and Alcohol Rehabilitation Foundation, Inc.<br/>
                        Headquarters:<br/>
                        364 Aguirre Avenue, Phase 3, BF Homes, Parañaque City, Metro Manila<br/>
                        Tel. No. (02) 7622-0193
                        </p>
                        <p>
                        New Manila Branch:<br/>
                        12 Orestes Lane, Mariposa Street<br/>
                        Tel. No. (02) 502-0600; (0917) 856-0623<br/>
                        Email: help@bridgesofhope.ph<br/>
                        Website: www.bridgesofhope.com.ph<br/>
                        Website: www.lifechangerecoverycenter.com
                        </p>
                    </div>
                </div>
            </Col>
            <Footer/>
        </Row>
    </div>
  )
}

export default ResponsibleGaming
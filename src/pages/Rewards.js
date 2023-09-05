import React from 'react';
import AppNavBar from '../components/AppNavBar';
import { Row, Col } from "react-bootstrap";
import ListBar from '../components/ListBar';
import angryCrab from "../assets/tieUps/angrycrab.png";
import armada from "../assets/tieUps/armada.png";
import ayumi from "../assets/tieUps/ayumi.png";
import bestWestern from "../assets/tieUps/bestWestern.png";
import Card1 from "../assets/card1.png";
import Card2 from "../assets/card2.png";
import headerBg from "../assets/header.png"
import Footer from '../components/Footer';

function Rewards() {
  return (
    <div className="cont-rewards">
        <AppNavBar />
        <div>
            <img src={headerBg} alt="" />
        </div>
        <Row>
            <Col lg={2}>
                <div className='sticky-list'><ListBar/></div>
            </Col>
            <Col lg={10}>
            <Row className='px-5 pb-5 rewardsFonts'>
                <h1 className='border-bottom px-5 pb-5 pt-4'>CF Membership Cards</h1>
                <Row className='p-5 rewards-cont'>
                    <Col className='px-5 CardText'>
                        <h5>PAGCOR Privilege Card</h5>
                        <h4>The PAGCOR Privilege Card (formerly PTS Card) is a special membership card which entitles members to exclusive privileges offered under Casino Filipino's customer loyalty rewards program. Whenever cardholders play at any Casino Filipino's table games they earn points which can be used to avail complimentary amenities at the casino such as free food and beverage. THe Promo Card also grants customers eligibility to participate in Casino Filipino's exciting promotions like raffles, table games tournaments, and other thrilling events, where millions of pesos worth of prizes are up for grabs.</h4>
                    </Col>
                    <Col className='CardsStyle'>
                        <img src={Card1} alt="" />
                    </Col>
                </Row>
                <Row className='p-5 rewards-cont'>
                    <Col  className='px-5 CardText'>
                        <h5>Slot Machine Promo Card</h5>
                        <h4>The Slots Promotions Card is a membership rewards card providing slot machine players exclusive access to exciting privileges under Casino Filipino customers lo rewards program such as complimentary amenities and playable credits. Cardholders earn points wherever they play at Casino Filipino's slot machines. The card also grants member eligibly to participate in Casino Filipino's special slot machine promotions such as raffles, tournaments, and other exciting events, where millions of pesos worth of prizes await lucky winners.</h4>
                    </Col>
                    <Col className='CardsStyle'>
                        <img src={Card2} alt="" />
                    </Col>
                </Row>
                <Row className='p-5'>
                    <h1 className='px-5 pb-5 pt-4'>Tie Ups</h1>
                    <Col className='d-flex justify-content-center mb-3'>
                        <img src={angryCrab} alt="" />
                    </Col>
                    <Col className='d-flex justify-content-center mb-3'>
                        <img src={armada} alt="" />
                    </Col>
                    <Col className='d-flex justify-content-center mb-3'>
                        <img src={ayumi} alt="" />
                    </Col>
                    <Col className='d-flex justify-content-center mb-3'>
                        <img src={bestWestern} alt="" />
                    </Col>
                </Row>
            </Row>
            </Col>
            <Footer/>
        </Row>
    </div>
  )
}

export default Rewards
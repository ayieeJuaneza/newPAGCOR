import React from 'react'
import { Row, Col } from "react-bootstrap"

function Footer() {
  return (
    <div className='footer-background'>
        <Row className="p-4">
            <Col lg={8}>
                <Row>
                    <Col lg={4} sm={12}>
                        <h3>Casino Offers</h3>
                        <ul>
                            <li>Promotions</li>
                            <li>Events</li>
                            <li>Tournaments</li>
                            <li>Rewards</li>
                            <li>Gaming Guide</li>
                        </ul>
                    </Col>
                    <Col lg={8} sm={12}>
                        <h3>Quick Links</h3>
                        <Row>
                            <Col lg={4}>
                                <ul>
                                    <li>About Us</li>
                                    <li>Branches</li>
                                    <li>Partners</li>
                                    <li>Enterntainment</li>
                                    <li>Responsible Gaming</li>
                                </ul>
                            </Col>
                            <Col lg={8}>
                                <ul>
                                    <li>Contact Us</li>
                                    <li>CSR</li>
                                    <li>Data Privacy</li>
                                    <li>Careers</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={4} sm={12}>
                        <h3>Social Links</h3>
                        <div>images</div>
                    </Col>
                    <Col lg={8} sm={12}>
                        <ul>
                            <li>Email: support@casinofilipino.ph </li>
                            <li>Landline (02)8-1234-567</li>
                            <li>Mobile Number: +63 912 345 6789 </li>
                        </ul>
                    </Col>
                </Row>
            </Col>
            <Col lg={4}>
                <div>
                    <h3>Payment Channels</h3>
                    <div>
                        <p>© 2023 Casino Filipino Online
                        All Rights Reserved</p>
                    </div>
                </div>
            </Col>
        </Row>
</div>
  )
}

export default Footer
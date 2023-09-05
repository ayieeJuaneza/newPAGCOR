import React from 'react'
import AppNavBar from '../components/AppNavBar'
import { Container, Row, Col } from 'react-bootstrap'
import ListBar from '../components/ListBar'
import Footer from '../components/Footer'
import headerBg from "../assets/header.png"

function Branches() {
  return (
    <div  className='cont-branches'>
        <AppNavBar/>
        <div>
            <img src={headerBg} alt="" />
        </div>
            <Row>
                <Col lg={2}>
                    <div className='sticky-list'><ListBar/></div>
                </Col>
                <Col lg={10}>
                    <Row className='px-5 pb-5 branchesFonts'>
                    <h1 className='px-5 pb-5 pt-4'>BRANCHES</h1>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Angeles</h5>
                                <p>McArthur Highway, Balibago, Angeles City, Pampanga</p>
                            </div>
                            <div>
                                <h5>Grand Regal</h5>
                                <p>Grand Regal Hotel, Km. 7, Lanang,<br/>Davao City</p>
                            </div>
                            <div>
                                <h5>New Coast</h5>
                                <p>New Coast Hotel Manila, 1558 MH Del Pilar cor. Pedro Gil St., Malate, Manila</p>
                            </div>
                        </Col>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Bacolod</h5>
                                <p>L'Fisher Hotel, 14th cor. Lacson St., Bacolod City</p>
                            </div>
                            <div>
                                <h5>Ilocos Norte</h5>
                                <p>365 Plaza, National Highway, Brgy. 1, San Nicolas, Ilocos Norte</p>
                            </div>
                            <div>
                                <h5>Ronquillo</h5>
                                <p>Gold City Square, Ronquillo St., Sta. Cruz, Manila</p>
                            </div>
                        </Col>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Cebu</h5>
                                <p>Waterfront Hotel & Casino, Salinas Drive, Lahug, Cebu City</p>
                            </div>
                            <div>
                                <h5>Olongapo</h5>
                                <p>YBC Bldg., 580 Rizal Ave., East Tapinac, Olongapo City</p>
                            </div>
                            <div>
                                <h5>Tagaytay</h5>
                                <p>Emilio Aguinaldo Highway,<br/>Tagaytay City</p>
                            </div>
                        </Col>
                        <h1 className='px-5 pb-5 pt-4 mt-5'>SATELLITE CASINOS</h1>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Adriatico</h5>
                                <p>M. Adriatico cor. Gen. Malvar Sts., Malate, Manila</p>
                            </div>
                            <div>
                                <h5>Cagayan Valley</h5>
                                <p>2/F King Street Mall, 105 Rizal Avenue District 3, Cauayan City, Isabela</p>
                            </div>
                            <div>
                                <h5>Citystate</h5>
                                <p>Citystate Tower Hotel, 1315 A. Mabini St., Ermita, Manila</p>
                            </div>
                            <div>
                                <h5>Grand Imperial Gensan</h5>
                                <p>Grand Imperial Casino H. Arriola Street, Lagao, Gen. Santos City</p>
                            </div>
                            <div>
                                <h5>Greenery</h5>
                                <p>Sabang,<br/>Baliuag Bulacan</p>
                            </div>
                            <div>
                                <h5>Leisure World</h5>
                                <p>King's Royale Hotel & Leisure Park, Olongapo-Gapan Rd., Bacolor, Pampanga</p>
                            </div>
                            <div>
                                <h5>Madison</h5>
                                <p>Madison Square Pioneer, Sheridan St., Mandaluyong City</p>
                            </div>
                            <div>
                                <h5>Manila Grand Opera</h5>
                                <p>Manila Grand Opera Hotel, 925 Rizal Ave. cor. Doroteo Jose St., Sta. Cruz, Manila</p>
                            </div>
                            <div>
                                <h5>Oriental Pavilion</h5>
                                <p>Violeta Rd., Brgy. Sta. Cruz,<br/>Guiguinto, Bulacan</p>
                            </div>
                            <div>
                                <h5>Subic Bay Yacht Club</h5>
                                <p>408 Waterfront Rd., Subic Bay Freeport Zone, Olongapo City</p>
                            </div>
                            <div>
                                <h5>Town Center</h5>
                                <p>San Pedro Town Center, National Highway, San Pedro, Laguna</p>
                            </div>
                            <div>
                                <h5>Venezia</h5>
                                <p>Subic Bay Venezia Hotel, Canal Rd., Subic Bay Freeport Zone, Olongapo City</p>
                            </div>
                        </Col>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Apo View</h5>
                                <p>The Apo View Hotel, J. Camus Ext. Poblacion Dist.,Davao City</p>
                            </div>
                            <div>
                                <h5>Calamba</h5>
                                <p>Hotel Marciano, First PJM Compund Real Calamba Laguna</p>
                            </div>
                            <div>
                                <h5>El Rancho</h5>
                                <p>El Rancho Hotel, National Highway, Biñan City, Laguna</p>
                            </div>
                            <div>
                                <h5>Grand Imperial Opol</h5>
                                <p>The Grand Imperial Casino, Hanson Bldg., Brgy. Taboc, Opol Misamis Oriental</p>
                            </div>
                            <div>
                                <h5>Iloilo</h5>
                                <p>2nd Floor, Amigo Mall, Citidanes Amigo Hotel, Solis Street, Iloilo City 5000</p>
                            </div>
                            <div>
                                <h5>Mactan</h5>
                                <p>Waterfront Airport Hotel & Casino, #1 Airport Rd., Lapu-Lapu City</p>
                            </div>
                            <div>
                                <h5>Malabon Grand</h5>
                                <p>Malabon Grand Hotel & Leisure Park, McArthur Highway, Malabon City</p>
                            </div>
                            <div>
                                <h5>Midas</h5>
                                <p>Midas Hotel & Casino, 2702 Roxas Blvd., Pasay City</p>
                            </div>
                            <div>
                                <h5>Oriental By The Bay</h5>
                                <p>Sofitel Philippine Plaza, CCP Complex, Pasay City</p>
                            </div>
                            <div>
                                <h5>Tagum</h5>
                                <p>Pennylane Hotel, Apokon Road,<br/>Tagum City</p>
                            </div>
                            <div>
                                <h5>Tropicana Las Pinas</h5>
                                <p>Eurotel Building, Alabang-Zapote Rd., Las Piñas City</p>
                            </div>
                        </Col>
                        <Col className='texts px-5' sm={1} md={4}>
                            <div>
                                <h5>Binondo</h5>
                                <p>Chinatown Lai-Lai Hotel, 801 Ongpin cor. S.B. Padilla Sts., Binondo, Manila</p>
                            </div>
                            <div>
                                <h5>Capital</h5>
                                <p>4030 Claro M Recto Hwy, Clark Freeport, Mabalacat, Pampanga</p>
                            </div>
                            <div>
                                <h5>Fuente</h5>
                                <p>Crown Regency Hotel & Towers, Fuente Triangle, Osmeña Blvd., Cebu Cit</p>
                            </div>
                            <div>
                                <h5>Grandz</h5>
                                <p>Mc Arthur Highway,<br/>Caloocan City</p>
                            </div>
                            <div>
                                <h5>Kartini</h5>
                                <p>Kartini Hotel, Centennial Rd.,<br/>Kawit, Cavite</p>
                            </div>
                            <div>
                                <h5>Mactan Isla</h5>
                                <p>Agus Rd.,Ibabao, Marigondon, Lapu-Lapu City, Cebu</p>
                            </div>
                            <div>
                                <h5>Mandaue</h5>
                                <p>Networld Hotel, Roxas Blvd. cor. Perla St., Pasay City</p>
                            </div>
                            <div>
                                <h5>Networld</h5>
                                <p>Parkmall, 168 Ouano Ave., Mandaue Reclamation Rd., Mandaue City</p>
                            </div>
                            <div>
                                <h5>Premiere</h5>
                                <p>Paseo Premiere Hotel, Sta. Rosa Business Park, Greenfield City, Sta. Rosa City, Laguna</p>
                            </div>
                            <div>
                                <h5>Talisay</h5>
                                <p>Win Hotel & Casino, South Coast Center, N. Bacalso South National Highway, Linao, Talisay City</p>
                            </div>
                            <div>
                                <h5>Tropicana Sta. Mesa</h5>
                                <p>4166 G.P. Ramon Magsaysay Blvd., Sta. Mesa, Manila</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Footer/>
            </Row>
    </div>
  )
}

export default Branches
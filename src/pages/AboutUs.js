import React from 'react'
import AppNavBar from '../components/AppNavBar'
import Headers from '../components/Headers'
import { Row, Col } from "react-bootstrap"
import ListBar from '../components/ListBar'

function AboutUs() {
  return (
    <div className='cont-aboutUs'>
        <AppNavBar/>
        <div>
            <Headers/>
        </div>
        
    </div>
  )
}

export default AboutUs
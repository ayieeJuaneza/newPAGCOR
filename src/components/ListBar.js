
import React from 'react'
import { ListGroup } from 'react-bootstrap'

function ListBar() {
  return (
    <div className='listGroup sticky-top'>
        <p className='py-2 ps-4 item mb-1'>Promotions</p>
        <p className='py-2 ps-4 item mb-1'>Events</p>
        <p className='py-2 ps-4 item mb-1'>Tournaments</p>
        <p className='py-2 ps-4 item mb-1'>Rewards</p>
        <p className='py-2 ps-4 item mb-1'>Branches</p>
        <p className='py-2 ps-4 item mb-1'>Gaming Guide</p>
    </div>
  ) 
}

export default ListBar
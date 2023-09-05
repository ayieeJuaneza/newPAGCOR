
import React from 'react'
import { Container, ListGroup } from 'react-bootstrap'

function ListBar() {
  return (
    <Container className='listGroup sticky-top'>
        <p className='py-2 ps-4 item mb-1'><a className='ListHref' href="/events">Events</a></p>
        <p className='py-2 ps-4 item mb-1'><a className='ListHref' href="/tournaments">Tournaments</a></p>
        <p className='py-2 ps-4 item mb-1'><a className='ListHref' href="/rewards">Rewards</a></p>
        <p className='py-2 ps-4 item mb-1'><a className='ListHref' href="/branches">Branches</a></p>
        <p className='py-2 ps-4 item mb-1'><a className='ListHref' href="/gaming-guide">Gaming Guide</a></p>
    </Container>
  ) 
}

export default ListBar
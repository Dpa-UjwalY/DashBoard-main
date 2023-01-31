import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "../App.css"

export const ItoItem = ({ id, name, price, url }) => {
  return (
    <Card className='ito-item' >
        <Card.Body className='row'>
          <div className='col-md-4'>{name}</div>
          <div className='col-md-4 d-flex justify-content-center align-items-center'><Button variant='dark' size='sm' >{price}</Button></div>
          <div className='col-md-4'>{name}</div>
        </Card.Body>
    </Card>
  )
}

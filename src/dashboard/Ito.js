import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "../App.css"
import { ItoItem } from '../components/ItoItem';
import ito from "../data/items.json";

export const Ito = () => {
  return (
  <div>
    <div className='ito-heading'>
      <h2>Initail Token Offering</h2>
    </div>
    <div className='ito' >
      <Row lg={3} md={2} xs={1} className="g-3 ito-align">
        {ito.map((items) => (
          <Col key={items.id}>
            <ItoItem {...items} />
          </Col>
        ))}
      </Row>
    </div>
  </div>
  )
}
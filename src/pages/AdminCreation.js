import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import "../App.css"

export const AdminCreation = () => {
  return (
    <div>
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="Role Assignment" >

      </Tab>
      <Tab eventKey="2" title="Task Assignment">
        
      </Tab>
    </Tabs>
  </div>
  )
}


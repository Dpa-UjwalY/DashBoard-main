import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Ito } from "../dashboard/Ito";

export const DashBoard = () => {
  const [key, setKey] = useState('home');

return (
  <div>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <Ito/>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <Ito/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Ito/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Ito/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Ito/>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Ito/>
      </Tab>
    </Tabs>
  </div>
  );
};

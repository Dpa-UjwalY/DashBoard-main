import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import { sidebarData } from "../data/sidebarData.js";
import "../App.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export const SideBar = () => {
  const [select, setSelect] = useState(0);
  const [logout, setLogout] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar
        textColor="#000000"
        backgroundColor="#ffffff"
        maxWidth="315px"
      >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <NavLink to="/dashboard">
            <img
              className="image"
              src="https://www.decimalpointanalytics.com/static/media/dpa_main_logo.df6414e47945efb8229be45724f5238d.svg"
              alt=""
            />
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content sidebar">
          <CDBSidebarMenu>
            {sidebarData.map((item, index) => {
              return (
                <NavLink
                  to={`/${item.address}`}
                  key={item.id}
                  className={select === index ? "active" : ""}
                  onClick={() => setSelect(index)}
                >
                  <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={<Tooltip id="button-tooltip">
      {item.name}
    </Tooltip>}
    >
                  <CDBSidebarMenuItem icon={item.tag}>
                    <h6>{item.name}</h6>
                  </CDBSidebarMenuItem></OverlayTrigger>
                </NavLink>
              );
            })}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter
          style={{ textAlign: "center" }}
          className="sidebar-content sidebar"
        >
          <CDBSidebarMenu>
          <div style={{
              padding: '20px 5px',
            }}><NavLink
              to="/logout"
              onClick={() => setLogout(true)}
              className={logout ? "logout active" : ""}
            >
                <MdOutlineLogout /> LOGOUT
            </NavLink>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

// <CDBSidebarFooter style={{ textAlign: 'center' }}>
// <div
//       className=""
//       style={{padding: '20px 13px'}}
//       >
//   <Link to="/logout" onClick={()=>setLogout(true)} className={logout ? ' active': '' } ><MdOutlineLogout/> LOGOUT</Link>
//     </div>
//   </CDBSidebarFooter>

import React, { useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { sidebarData } from '../data/sidebarData';

const CSidebar = () => {
    const [select, setSelect] = useState(0);
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}} >
      <CDBSidebar textColor="#000000" backgroundColor="#ffffff"  maxWidth="315px" >
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <NavLink to="/dashboard" >
          <img className="image" src="https://www.decimalpointanalytics.com/static/media/dpa_main_logo.df6414e47945efb8229be45724f5238d.svg" alt="" />
        </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content sidebar">
          <CDBSidebarMenu>
          {
          sidebarData.map((item, index)=>{
            return <NavLink to={`/${item.address}`} key={item.id} 
            className={select===index?'active': ''}
            onClick={()=>setSelect(index)}
            ><CDBSidebarMenuItem icon={item.tag} ><h6>{item.name}</h6></CDBSidebarMenuItem></NavLink>
          })
        }
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}

export default CSidebar
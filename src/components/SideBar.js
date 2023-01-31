import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md"
import { sidebarData } from "../data/sidebarData.js"
import "../App.css";


export const SideBar = () => {

  const [select, setSelect] = useState(0);
  const [logout, setLogout] = useState(false);

  return (
    <div>
      <div className="sidebar">
      <nav className="" >
        <Link to="/dashboard" >
          <img className="image" src="https://mma.prnewswire.com/media/1843998/DPA_LOGO.jpg?p=facebook" alt="" />
        </Link>
      </nav>
      <nav >
        {
          sidebarData.map((item, index)=>{
            return <Link to={`/${item.address}`} key={item.id} 
              className={select===index?'logoo active': 'logoo'}
              onClick={()=>setSelect(index)}
            ><span></span><item.tag /> {item.name}</Link>
          })
        }
      </nav>
      <nav>
        <Link to="/logout" onClick={()=>setLogout(true)} className={logout ? 'active': '' } ><MdOutlineLogout/> LOGOUT</Link>
      </nav>
      </div>
    </div> 
    );
};

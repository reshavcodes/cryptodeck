import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import icon from "../images/cryptocurrency.png";

const Navbar = () => {

  //Making a responsive navbar
  const [activeMenu, setActiveMenu] =  useState(true)

  const [screenSize, setScreenSize] = useState(null)


  useEffect(()=>{


    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => window.removeEventListener("resize", handleResize)

  },[])

  useEffect(()=>{
    if(screenSize<768){
      setActiveMenu(false)
    }
    else{
      setActiveMenu(true)
    }
  },[screenSize])


  return (
    <div className="nav-container">
      <div className="logo-container">
        
        
        <Link style={{'font-size':'1.5rem',color:'cyan'}} to="/"><strong><i style={{color:'cyan'}} class="fab fa-bitcoin fa-lg"></i>CryptoDeck</strong></Link>
        <Button className="menu-control-container" onMouseEnter={()=>setActiveMenu(!activeMenu)} 
        onMouseLeave={()=>setTimeout(()=>{
          setActiveMenu(!activeMenu)
      },3000)}
        >
          <MenuOutlined />
        </Button>

      </div>
      {activeMenu && (
      <Menu theme="dark">
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="2" icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>

        <Menu.Item key="3" icon={<MoneyCollectOutlined />}>
          <Link to="/exchanges">Exchanges</Link>
        </Menu.Item>

        <Menu.Item key="4" icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link to="/about">About the Creator</Link>
        </Menu.Item>
      </Menu>)}
    </div>
  );
};

export default Navbar;

import { Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { RiPieChart2Fill } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';


const SidebarMenu = () => {
  return (
    <div>
       <Menu style={{background:"#F6F6F6"}} mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<RiPieChart2Fill/>}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FaRegCircleUser/>}>
            <Link to="/user-management">User Management</Link>
          </Menu.Item>
          <Menu.Item key="3"  icon={<FaRegCircleUser/>}>
            <Link to="/restaurant">Restaurant</Link>
          </Menu.Item>
          <Menu.Item key="4"  icon={<FaRegCircleUser/>}>
            <Link to="/administrator">Administrator</Link>
          </Menu.Item>
       </Menu>
    </div>
  )
}

export default SidebarMenu

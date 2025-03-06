import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from "antd";
import SidebarMenu from '../components/shared/SidebarMenu';
import HeaderPart from '../components/shared/HeaderPart';

const RootLayOut = () => {
    const { Header, Sider} = Layout;

  return (
    <Layout style={{ minHeight: "calc(100vh-64px)" }}>
      <HeaderPart/>
  <Layout>
  <Sider style={{background:"#F6F6F6"}} width={200} theme="light" >
    <SidebarMenu/>
  </Sider>
     <Outlet/>
  </Layout>
</Layout>
  )
}

export default RootLayOut

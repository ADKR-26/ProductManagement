import React from 'react'
import 'antd/dist/antd.min.css'
import { UserOutlined } from '@ant-design/icons';
import { Layout, Avatar } from 'antd';
import { NavLink } from 'react-router-dom'


const { Header } = Layout;

export default function NavBar1() {
  return (
    <div className='navBar'>

        <Layout>
        <Header style={{color:"white",background:"#3265fa",paddingInline:"25px",display:"flex",justifyContent:"space-between"}}>
          <NavLink to = '/home' style={{color:"white"}}><h3><b style={{color:"white"}}>Rubick.ai</b></h3></NavLink>
          <div><Avatar  icon={<UserOutlined />} /> Admin</div>
          </Header>
        </Layout>
    </div>
  )
}

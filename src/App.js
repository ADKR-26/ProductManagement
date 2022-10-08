import './App.css';
import Home from './components/Home.js';
import { Layout, Avatar } from 'antd';
import React from 'react';
import {
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Products from './components/Products';
import AddData from './components/AddData';
import NavBar1 from './components/NavBar1';



const { Header, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
          <Layout>
          <NavBar1/>
          <Layout style={{height:"30px",backgroundColor:"white"}}>
          <Sider style={{backgroundColor:"white",paddingInline:"25px",height:"100vh",position:"fixed"}}>
              <ul>
                <li className='nav'><NavLink to="/home"  style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Home</NavLink></li>
                <li className='nav'><NavLink to="/products" style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Products</NavLink></li>
                <li className='nav'><NavLink to='/settings' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Settings</NavLink></li>
               
              </ul>
            </Sider>
            <Content style={{marginLeft:"200px",width:"100%",backgroundColor:"lightgray",paddingInline:"40px",height:"120vh",paddingBlock:"50px",wordWrap:"break-word"}}>
                <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/products' element={<Products/>}></Route>
                <Route path='/settings' element={<div>Setting</div>}></Route>
                <Route path='/add-data' element={<AddData/>}></Route>
                 
                  
                </Routes>
            </Content>
          </Layout>
        </Layout>
          
    </div>
    
  );
  
}

export default App;

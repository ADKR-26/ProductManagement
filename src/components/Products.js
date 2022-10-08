import React from 'react';
import { Table, Tag,Select,Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Route, Routes ,Link, NavLink} from 'react-router-dom';
import AddData from './AddData';
const { Option } = Select;


export default function Product() {
  
  const [product, setProduct] = useState([]);
  const [totalpages,settotalPages]=useState(1);
  

  useEffect(() => {
    axios.get("http://localhost:8000")
      .then(res=>setProduct(res.data))
      .catch(err=>console.log(err))
      
      
  })

  const columns = [
    {
      title:'Code',
      dataIndex:'code',
      key:'code'

    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render:(tag)=>{
        const color= tag.includes('Inactive')?'Red':'Green'
        return <Tag color={color} key={tag}>{tag}</Tag>
      }      
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: ((date:String) => getFullDate(date))
    },
  ]

  const getFullDate = (date: string): string => {
    const dateAndTime = date.split('T');
  
    return dateAndTime[0].split('-').reverse().join('-');
  };

  return (
    <div>
      <div  >
  
       <p style={{color:"black",fontSize:"20px"}}><b>Products</b>

       <NavLink to='/add-data' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>
        <Avatar style={{marginLeft:"11px", color:'blue'}} icon={<PlusCircleOutlined/>}/>
        </NavLink>
        <Routes>
        <Route path ='/add-data' element={<AddData/>}/>
        </Routes>

        <Select
        style={{float:"right",width:"200px"}}
      defaultValue="today"
      
    >
      <Option value="today">Today</Option>
      <Option value="this week">This week</Option>
      <Option value="this month">This month</Option>
      <Option value="next month" > Next Month</Option>
      
    </Select>
        </p>
      

      </div>
      <Table columns={columns}  dataSource={product} pagination={{pageSize:7}}/>
      
      
    </div>
  );
}

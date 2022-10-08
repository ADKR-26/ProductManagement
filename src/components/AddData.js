import React, { Component } from 'react'
import axios from 'axios'
import { Button , Input, Form, Row, Select, message, Switch} from 'antd'

function AddData() {

  // const success = () => {
  //   message.success('This is a success message');
  // };

    const onFinish=(e)=>{

      let status
      if(e.status)
       status="active"
      else
      status="Inactive"

        let state={
         code:e.ProductCode,
         name:e.Name,
         status:status,
         qty:e.Quantity,
         price:e.Price,
         date:Date()
        }
       axios.post("http://localhost:8000/",state)
       .then(()=>alert(`Product Added Succesfully`))
       .catch(err=>console.log(err))
     }

    return (
        <div className='data1'>
            
            <div>
                <h2>New Products</h2>
            </div>

            <div>
          <Form  
          onFinish={onFinish} 
          layout='vertical'>
            <Row>
            <Form.Item name="ProductCode" 
            label="Product Code" 
            rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Wrong format!"

              },{
                min:4,
                message:"Code must be greater than 3 digit"
              }
            ]}>
             <Input style={{width:"400px",height:"50px"}} placeholder='Product Code' />
             </Form.Item>
            
             <Form.Item name="status" label="Status" style={{marginLeft:"40px"}}
              rules={[
                {
                  required:true
                }

              ]}
             >
            <Switch checkedChildren="Active" unCheckedChildren="InActive" defaultChecked />
              </Form.Item>
            </Row>
            

            <Form.Item name="Name" label="Name" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp (/^[A-Za-z]+$/),
                message: "Wrong format"

              },{
                min:3,
                message:"Name must be greater than 3 letter"
              }
            ]}>
              <Input  style={{width:"595px",height:"50px"}} placeholder='Name'/>
            </Form.Item>
            <Form.Item name="Quantity" label="Quantity" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Quantity must be in numbers"

              },{
                min:1,
                message:"Quantity must be more than 1"
              }
            ]}>
              <Input style={{width:"400px",height:"50px"}} placeholder='Quantity'/>
            </Form.Item>
            <Form.Item name="Price" label="Price"rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Price must be number"

              }
            ]}>
              <Input style={{width:"400px",height:"50px"}} placeholder='Price'/>
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='reset' shape='round' style={{color:"darkgray", backgroundColor:"grey",width:"160px" ,height:"50px"}}>Cancel</Button>
              <Button type='primary' htmlType='submit' shape='round' style={{marginLeft:"20px",width:"160px" ,height:"50px"}}>Submit</Button>
            </Form.Item>

            
          </Form>
        </div>
        </div>
    )
  }

export default AddData

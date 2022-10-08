import React, { Component } from 'react'
import axios from 'axios'
import'./addData.css'
import { Button , Input, Form, Row, Select, message, Switch} from 'antd'

function AddData() {

  const success = () => {
    message.success('This is a success message');
  };

    const onFinish=(e)=>{
        let state={
         code:e.ProductCode,
         name:e.Name,
         status:e.status,
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
            <Form.Item name="ProductCode" label="Product Code" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp(/^\d+$/g),
                message: "Wrong format!"

              },{
                min:4,
                message:"Code must be grster than 3 digit"
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
            {/* <Switch checkedChildren="Active" unCheckedChildren="InActive" defaultChecked /> */}
    
              <Select style={{width:"150px"}}>
                <Select.Option style={{color:"orange"}}  shape='round' value="Active"><b>Active</b></Select.Option>
                <Select.Option style={{color:"red"}} value="Inactive"><b>InActive</b></Select.Option>
              </Select>
              </Form.Item>
            </Row>
            

            <Form.Item name="Name" label="Name" rules={[
              
              {
                whitespace:true,
                required:true,
                
              },{
                pattern: new RegExp (/^[A-Za-z]+$/),
                message: "Wrong format!"

              },{
                min:3,
                message:"Name must be grster than 2 letter"
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
                message: "Wrong format!"

              },{
                max:100,
                message:"qty shoild be less thab 100"
              },{
                min:1,
                message:"quantiiy must be more than 1"
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
                message: "Wrong format!"

              }
            ]}>
              <Input style={{width:"400px",height:"50px"}} placeholder='Price'/>
            </Form.Item>
            <Form.Item>
            <Button type='primary' htmlType='reset' shape='round' style={{color:"darkgray", backgroundColor:"grey",width:"175px" ,height:"40px"}}>Cancel</Button>
              <Button type='primary' htmlType='submit' shape='round' style={{marginLeft:"20px",width:"175px" ,height:"40px"}}>Submit</Button>
            </Form.Item>

            
          </Form>
        </div>


            {/* <div>
                <Form
                onFinish={onFinish}
                name='basic'
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span:10
                }}>

                <Form.Item
                label='Product Code'
                rules={[
                    {
                        required:true,
                        message:"Please enter product code",
                    },
                    {
                        type:'number',
                        message:'Enter a valid Code'
                    },
                    {
                        maxLength:4,
                        message:'EL'
                        
                    }
                ]}
                >
                    <Input style={{width:"400px",height:"50px"}} placeholder='Product Code'/>
                </Form.Item>

                

                <Form.Item
                label='Product name'
                rules={[
                    {
                        required:true,
                        message:"Please enter product name"
                    },
                ]}
                >
                    <Input/>
                </Form.Item>

                

                <Form.Item
                label='Product Quantity'
                rules={[
                    {
                        required:true,
                        message:"Please enter product quantity"
                    },
                ]}
                >
                    <Input/>
                </Form.Item>


                <Form.Item
                label='Product price'
                rules={[
                    {
                        required:true,
                        message:"Please enter product code"
                    },
                ]}
                >
                    <Input/>
                </Form.Item>

                

                <Form.Item
                label='Status'
                rules={[
                    {
                        required:true,
                        message:"Please enter product status"
                    },
                ]}
                >
                    <Switch checkedChildren="Active" unCheckedChildren="Inactive" defaultChecked />
                </Form.Item>

                

                <Form.Item
                label='Product data'
                rules={[
                    {
                        required:true,
                        message:"Please enter date"
                    },
                ]}
                >
                    <Input/>
                </Form.Item>

                <Button type="primary" 
                htmlType="submit" >
                     Submit
                </Button>

                </Form>
            </div> */}
        </div>
    )
  }

export default AddData
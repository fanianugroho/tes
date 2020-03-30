import React, {Component} from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import '../App.css';
import { Pagination } from 'antd';
import { Rate } from 'antd';
import { Layout, Menu } from 'antd';
import { Input } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Card, Col, Row } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const { Search } = Input;

function Home() {
  

    const cardData = [
        {
          title : "Muhammad Fathurrohman" ,
          job   : "UI/UX",
        },
        {
          title : "Aliyana M" ,
          job   : "FrontEnd Dev",
        },
        {
          title : "Lisani Yuliana" ,
          job   : "System An",
        }
    ]
    return (
        <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">Profile</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined />
          <span className="nav-text">Media</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined />
          <span className="nav-text">Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
    
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ overflow: 'initial' }}>
        <div style={{ padding: 20, textAlign: 'center' }}>
              <Search
                    placeholder="Cari Nama Pegawai"
                    onSearch={value => console.log(value)}
                    style={{ textAlign: 'center' }}
              />
          <div className="site-card-wrapper">
              <Row gutter={16}>
              {cardData.map (data=>
                  <Col span={8}>
                    <Card title="Identitas Pegawai" bordered={true}>
                          <p className="title">{data.title} </p>
                          <p>{data.job}</p>
                          <Rate allowHalf defaultValue={2.5} />
                    </Card>
                    <br/>
                    <Card title="Produk Kecantikan" bordered={true}>
                    <br/>
                    <div>
                      <Product/>
                    </div>
                    <br/>
                    </Card>
                    
                  </Col>
                )}
              </Row>
              
          
          </div>
         
        </div>
        <Pagination style={{ textAlign: 'center' }}defaultCurrent={1} total={50} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
    
      
   
  </Layout>
   );
}






export default Home;
import React, { Component } from 'react'; 
import { Layout, Row, Col, Card, AutoComplete } from 'antd'; 
import '../assets/css/gallery.css' 
const { Meta } = Card;

const { Content ,Footer} = Layout; 
const image1 = require(`../assets/images/jepretan/1.JPG`);
const image2 = require(`../assets/images/jepretan/2.jpeg`);
const image3 = require(`../assets/images/jepretan/3.jpg`);
const image4 = require(`../assets/images/jepretan/4.jpg`);
const image5 = require(`../assets/images/jepretan/5.JPG`);
const image6 = require(`../assets/images/jepretan/6.jpeg`);



class GalleryComponent extends Component{
    render(){
        return(
            <Layout className="landing-container" >
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Beberapa Hasil Jepretan Foto
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#a6b1e1',
                                    border: 'none',
                                    maxWidth: 100,
                                    borderRadius: 26,
                                }}/>
                            </Col>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            <div className="site-card-wrapper-transparant">
                            <Row gutter={50}>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image1} />}
                                >
                                    <Meta title="Masjid Agung Ar-Rahman" description="Banten - Indonesia" />
                                </Card>
                                </Col>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image2} />}
                                >
                                    <Meta title="Tour Sewindu Tulus" description="Yogyakarta - Indonesia" />
                                </Card>
                                </Col>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image3} />}
                                >
                                    <Meta title="Soekarno Hatta International Airport" description="Tangerang - Indonesia" />
                                </Card>
                                </Col>
                                </Row>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                <Row gutter={50}>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image4} />}
                                >
                                    <Meta title="Senayan City" description="Jakarta - Indonesia" />
                                </Card>
                                </Col>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image5} />}
                                >
                                    <Meta title="Jl.Braga" description="Bandung - Indonesia" />
                                </Card>
                                </Col>
                                <Col span={90}>
                                <Card
                                    hoverable
                                    style={{ width: 300 }}
                                    cover={<img alt="example" src={image6} />}
                                >
                                    <Meta title="Pantai Sadranan" description="Yogyakarta - Indonesia" />
                                </Card>
                                </Col>
                                </Row>
                            </div>
                        </Row>
                </Content>
                <Footer style={{ textAlign: 'center', color:'#fffff' }}>Hani Fania ©2020 </Footer>
            </Layout>
        );
    }
}

export default GalleryComponent;
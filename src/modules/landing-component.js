import React, { Component } from 'react'; 
import { Layout, Row, Col } from 'antd'; 
import '../assets/css/landing.css' 
import { Carousel , Steps } from 'antd';

const { Content , Footer} = Layout;
const { Step } = Steps;

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/picture.png`);
        const image2 = require(`../assets/images/picture2.png`);
        const image3 = require(`../assets/images/picture3.png`); 
        const {initialData,showModal,handleOk,handleCancel} = this.props; 
        return(
            <Layout className="landing-container-transparant">
                
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                        <br/><br/><br/><br/>
                            <Carousel autoplay>
                                    <div>
                                         <img
                                         src={image1}
                                         style={{maxWidth: '80%'}}
                                         />
                                    </div>
                                    <div>
                                         <img
                                         src={image2}
                                         style={{maxWidth: '80%'}}
                                         />
                                    </div>
                                    <div>
                                        <img
                                         src={image3}
                                         style={{maxWidth: '80%'}}
                                         />
                                    </div>
                            </Carousel>
                            
                        </Col>
                        <Col lg={10} md={10} sm={10}>
                            <Row>
                                <Col span={24}>
                                    
                                    <div className="title-container">
                                        <br/><br/><br/><br/><br/>
                                        <span className="text-black title-biggest bold">Hello !</span>
                                        <br/>
                                        <span className="text-soft-blue title-medium bold">I'm Hani Fania Nugroho</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="description-container desc-medium">
                                        Mahasiswa Semester 4 D3 Komputer dan Sistem Informasi Sekolah Vokasi Universitas Gadjah Mada
                                    </div>
                                    
                                    
                                </Col>
                            </Row>
                        </Col>  
                    </Row>
                </Content>
                <Footer style={{ textAlign: 'center', color:'#fffff' }}>Hani Fania ©2020 </Footer>
            </Layout>
        );
    }
}

export default LandingComponent;
import React from 'react'
import './Descriptions.css'
import { Card, Col, Row } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import IOT from './img/IOT.jpg'
import RED from './img/RED.jpg'
import SIPROGE from './img/SIPROGE.png'
import { motion } from "framer-motion"


const { Meta } = Card;

const Descriptions = () => {
  return (
    <div className='descriptions' id='descriptions'>
        <motion.h2 initial={{ x: '-50vw' }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} >Descriptions</motion.h2>

        <motion.div initial={{ y: '100vw' }} animate={{ y: 0 }} transition={{ ease: "easeOut", duration: 1, delay: 0.5 }} className='des'>          
          <Row gutter={16}>
            <Col xs={18} sm={18} md={8} lg={8} xl={8}>
              <Card className='car' hoverable cover={<img alt="example" src={IOT} />}>
                <Meta title="IOT" description="Datacenter y nube nativa propia para garantizar la escalabilidad y seguridad de sus aplicaciones IoT" />
              </Card>
            </Col>
            <Col xs={18} sm={18} md={8} lg={8} xl={8}>
            <Card className='car' hoverable cover={<img alt="example" src={RED} />}>
                <Meta title="Modelos Flexibles De Red" description="Modelos flexibles para desplegar redes privadas empresariales donde y cuando lo necesite" />
              </Card>
            </Col>
            <Col xs={18} sm={18} md={8} lg={8} xl={8}>
            <Card className='car' hoverable cover={<img alt="example" src={SIPROGE} />}>
                <Meta title="Sistemas De Proxima Generacion" description="Ofrecemos sistemas en plataformas abiertas que permiten crecer sus aplicaciones en nuestra plataforma de datos" />
              </Card>
            </Col>
          </Row>
        </motion.div>
          <div className='navbtn'><Button  href='#gallery' type="primary" shape="circle" icon={<ArrowDownOutlined />} size={'large'} /></div>
    </div>
  )
}

export default Descriptions
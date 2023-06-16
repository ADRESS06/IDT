import React from 'react'
import './Statistics.css'
import { Col, Row, Statistic } from 'antd';
import { ArrowUpOutlined,BankTwoTone,ApiTwoTone,GoldTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;


const Statistics = () => {
  return (
    <div className='statistics' id='statistics'>
        <h2>Statistics</h2>
        <div className='stat'>

          <Row gutter={16} style={{display:'flex',justifyContent:'space-evenly',}}>
            <Col span={6}>
              <BankTwoTone style={{fontSize:'5em'}} />
              <Statistic title="Stations" value={2} formatter={formatter} />
            </Col>
            <Col span={6}>
              <GoldTwoTone style={{fontSize:'5em'}} />
              <Statistic title="Variables" value={4} precision={2} formatter={formatter} />
            </Col>
            <Col span={6}>
              <ApiTwoTone style={{fontSize:'5em'}} />
              <Statistic title="Sensors" value={4} precision={2} formatter={formatter} />
            </Col>
          </Row>

        </div>
        <div className='navbtn'><Button href='#gallery' type="primary" shape="circle" icon={<ArrowUpOutlined />} size={'large'} /></div>
    </div>
  )
}

export default Statistics
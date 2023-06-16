import React from 'react';
import { Layout, Space } from 'antd';
import './Main.css'
import LetGo from './LetGo/LetGo'
import Gallery from './Gallery/Gallery'
import Statistic from './Statistics/Statistics'
import Descriptions from './Descriptions/Descriptions'
import Footer from './Footer/Footer'

const { Header, Content } = Layout;


const Main = () => (
  <div className='Main'>
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Layout>
          <Header className='Header'><LetGo/></Header>
          <Content className='Content'><Descriptions/><Gallery/><Statistic/></Content>
          <Footer className='footer'><Footer/></Footer>
        </Layout>
    </Space>
  </div>
);

export default Main;
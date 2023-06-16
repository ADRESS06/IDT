import React from 'react'
import idlog from './IdLog.png'
import './Footer.css'
import { Button } from 'antd';
import { FacebookOutlined,LinkedinOutlined,InstagramOutlined,TwitterOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='foo'>
            <p>FOLLOW US</p>
            <Button href='#descriptions' shape="circle" icon={<LinkedinOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<FacebookOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<InstagramOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<TwitterOutlined/>} size={'large'} style={{margin:'0 1%',}} />
        </div>
        <div className='ter'>
            <p>© 2023 ID Tolu. All rights reserved</p>
        </div>
        <div className='imagenes'>
            <img src={idlog} alt='logoidt' />
        </div>
    </div>
  )
}

export default Footer
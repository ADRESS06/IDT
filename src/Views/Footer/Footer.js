import React from 'react'
import idlog from './IdLog.png'
import './Footer.css'
import { Button } from 'antd';
import { FacebookOutlined,LinkedinOutlined,InstagramOutlined,TwitterOutlined } from '@ant-design/icons';
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div className='footer'>
        <motion.div initial={{ x: '-50vw' }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className='foo'>
            <p>FOLLOW US</p>
            <Button href='#descriptions' shape="circle" icon={<LinkedinOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<FacebookOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<InstagramOutlined />} size={'large'} style={{margin:'0 1%',}} />
            <Button href='#descriptions' shape="circle" icon={<TwitterOutlined/>} size={'large'} style={{margin:'0 1%',}} />
        </motion.div>
        <div className='ter'>
            <p>© 2023 ID Tolu. All rights reserved</p>
        </div>
        <motion.div initial={{ x: '50vw' }} animate={{ x: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} className='imagenes'>
            <img src={idlog} alt='logoidt' />
        </motion.div>
    </div>
  )
}

export default Footer
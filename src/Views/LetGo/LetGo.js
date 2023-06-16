import React from 'react'
import log from './Log.svg'
import './LetGo.css'
import { Button } from 'antd'
import { SyncOutlined } from '@ant-design/icons'
import { motion } from "framer-motion"

function LetGo() {
  return (
    <div className='letgo'>
        <div className='lo'><img src={log} alt='image_boton' /></div>

        <div className='go'>
            <motion.h2 initial={{scale: 0}} animate={{scale: 1}} transition={{ease:'easeInOut',duration: 1}}  >Go to Single Sing-On</motion.h2>
            <Button className='btn' type="primary" shape="round" size='large'><SyncOutlined spin={true} /> Go!</Button>
        </div>
    </div>
  )
}

export default LetGo
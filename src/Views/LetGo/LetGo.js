import React from 'react'
import log from './Log.svg'
import './LetGo.css'
import { Button } from 'antd'
import { SyncOutlined } from '@ant-design/icons'


function LetGo() {
  return (
    <div className='letgo'>
        <div className='lo'><img src={log} alt='image_boton' /></div>

        <div className='go'>
            <h2>Go to Single Sing-On</h2>
            <Button className='btn' type="primary" shape="round" size='large'><SyncOutlined spin={true} /> Go!</Button>
        </div>
    </div>
  )
}

export default LetGo
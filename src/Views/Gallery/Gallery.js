import React from 'react'
import './Gallery.css'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Carousel,Image } from 'antd'
import v1 from './EdithImages/OldStation/Version1.png'
import v2 from './EdithImages/OldStation/Version2.png'
import Dashboard from './EdithImages/Plataform/DashBoard.png'
import Reports from './EdithImages/Plataform/Reports.png'
import Notification from './EdithImages/Plataform/Notification.png'
import BlockChain from './EdithImages/Plataform/BlockChain.png'


const Gallery = () => {
  return (
      <div className='gallery' id='gallery' style={{animationDuration: '2s'}}>

          <h2>Gallery</h2>
          <div className='gall'>

            <div className='carr'>
              <Carousel autoplay>
                <div>
                    <Image src={v1} />
                </div>
                <div>
                    <Image src={v2} />
                </div>
              </Carousel>
            </div>

            <div className='carr'>
              <Carousel autoplay>
                <div>
                    <Image src={Dashboard} />
                </div>
                <div>
                    <Image src={Reports} />
                </div>
                <div>
                    <Image src={Notification} />
                </div>
                <div>
                    <Image src={BlockChain} />
                </div>
              </Carousel>
            </div>

            <div className='carr'>
              <Carousel autoplay>
                <div>
                    <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                </div>
                <div>
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                </div>
                <div>
                    <Image src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                </div>
                <div>
                    <Image src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg" />
                </div>
              </Carousel>
            </div>


        </div>
        <div className='navbtn'>
          
        <Button href='#descriptions' shape="circle" icon={<ArrowUpOutlined />} size={'large'} style={{margin:'1em',}} />
        <Button href='#statistics' shape="circle" icon={<ArrowDownOutlined/>} size={'large'} style={{margin:'1em',}} />
        
        </div>

      </div>
  )
}

export default Gallery
import React from 'react'
import styles from '../../styles/styles'
import CountDown from './CountDown'

const EventCard = () => {
  return (
    <div className='w-full bg-white rounded-lg lg:flex
    p-2'>
        <div className='w-full lg:w-[50%] m-auto'>
            <img src='https://m.media-amazon.com/images/I/71657TiFeHL.SX522.jpg'
            alt=""/>
        </div>
        <div className='w-full lg:w-[50%] m-auto flex
        flex-col justify-center'>
            <h2 className={`${styles.productTitle}`}>
                Iphone 14Pro
            </h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was 
            popularised in the 1960s with the release of Letraset sheets 
            containing Lorem Ipsum passages, and more recently with desktop
             publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div className='flex py-2 justify-between'>
                <div className='flex'>
                    <h5 className='font-bold text-[20px] pr-3 color-[#333] font-Roboto'>
                        $5800
                    </h5>
                    <h5 className='font-[500] text-[18px] text-[#d55b45] line-through'>

                    </h5>
                </div>
                <span className='pr-3 font-[400] text-[17px] text-[#44c944]'>
                    120 Sold
                </span>
            </div>
            <CountDown/>
        </div>
    </div>
  )
}

export default EventCard
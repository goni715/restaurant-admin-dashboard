import { RadarChartOutlined } from '@ant-design/icons'
import Avatar from 'antd/es/avatar/Avatar'
import { Header } from 'antd/es/layout/layout'

const HeaderPart = () => {
  return (
    <div>
        <Header className='!bg-[#f6f6f6]  flex justify-between items-center'>
         <div className='flex items-center space-x-2'>
         <RadarChartOutlined className='text-3xl'/>
         <p className='font-semibold'>Our Coueses</p>
         </div>
         <div className='flex items-center  gap-x-2'>
            <Avatar size={36} src={'/ant.png'} />
            <p className='text-xl'> Mehedi Hasan </p>
         </div>
      </Header>
    </div>
  )
}

export default HeaderPart

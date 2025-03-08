import { RadarChartOutlined } from '@ant-design/icons'
import Avatar from 'antd/es/avatar/Avatar'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

const HeaderPart = () => {
  return (
    <div className='h-[100px]'>
        <Header className='!bg-[#f6f6f6]  flex justify-between items-center'>
         <div className='py-2.5'>
           <Link to={'/'}>
             <img src="/elhagz.png" className='w-20 h-20' alt="elhagz" />
           </Link>
         </div>
         <div className='flex items-center  gap-x-2'>
            <img src="/admin.png" alt="admin"  className='w-14 h-14'  />
            <div>
            <p className='text-xl'> Mehedi Hasan </p>
            <p className='text-xl'> Admin </p>
            </div>
         </div>
      </Header>
    </div>
  )
}

export default HeaderPart

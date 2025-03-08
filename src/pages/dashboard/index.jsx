import React from 'react'
import Cards from '../../components/dashboardComponents/Cards'
import ReservationChart from '../../components/dashboardComponents/ReservationChart'
import UsersGrowth from '../../components/dashboardComponents/UsersGrowth'
import RecentUsers from '../../components/dashboardComponents/RecentUsers'

const Dashboard = () => {
  return (
    <div>
     <div className='flex gap-x-5'>
     <Cards
      bgColor="#D71920" 
      title="Total Restaurants"
      count="21,650"
      imageSrc="/profile-user.png" 
      />

     <Cards
      bgColor="#869CFF" 
      title="Total Restaurants"
      count="21,650"
      imageSrc="/profile-user.png" 
      />   

<Cards
      bgColor="#B28DFE" 
      title="Total Restaurants"
      count="21,650"
      imageSrc="/profile-user.png" 
      />

     </div>
     <div className='flex mt-5 gap-x-5'>
     <div className='w-1/2'><ReservationChart/></div>
     <div className='w-1/2'><UsersGrowth/></div>
      
     </div>
      <RecentUsers/>
    </div>
  )
}

export default Dashboard

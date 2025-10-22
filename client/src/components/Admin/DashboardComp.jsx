import React from 'react'
import SalesChart from '../Charts/SalesChart'

const DashboardComp = () => {

  const TOP1DATA = [
    {
      name: "Total Customers",
      logo: "ri-team-line",
      count: 100
    },
    {
      name: "Total Products",
      logo: "ri-shopping-cart-line",
      count: 100
    },
    {
      name: "Total Orders",
      logo: "ri-stack-line",
      count: 100
    },
    {
      name: "Total Sales",
      logo: "ri-wechat-line",
      count: 100
    }
  ]


  return (
    <div>
      <div className='min-h-[15vh] w-full flex items-center justify-between flex-wrap gap-2'>
        {
          TOP1DATA?.map((data, index) => {
            return (
              <div className='w-[200px] h-[70px] bg-gray-600/50 rounded-md flex items-center gap-2 px-2 shadow-xl' key={index}>
                <div className='h-[50px] w-[50px] rounded-md bg-purple-500 flex items-center justify-center text-black text-xl'><i className={data?.logo}></i></div>
                <div>
                  <h3 className='text-2xl font-bold'>{data.count}</h3>
                  <p className='text-gray-900 text-sm'>{data.name}</p>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='w-full min-h-[45vh] mt-15 flex gap-5'>
        <div className='w-[50vw] h-[70vh] relative shrink-0 bg-gray-600/50 rounded-md flex items-center justify-center gap-2 shadow-xl'>
        <h1 className='absolute top-0 text-2xl'>Progess.</h1>
          <SalesChart />
        </div>

        <div className='w-[32vw] h-[70vh] relative shrink-0 bg-gray-600/50 rounded-md flex items-center justify-center gap-2 shadow-xl'>
        <h1 className='absolute top-0 text-2xl'>Views.</h1>
          
        </div>
      </div>
    </div>
  )
}

export default DashboardComp
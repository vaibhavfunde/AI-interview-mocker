import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewinterview from './_components/AddNewinterview'
import Interviewlist from './_components/InterviewlLst'

function Dashboard() {
  return (
    <div className='p-10'>

      <h2 className='font-bold text-2xl'>DashBoard</h2>
      <h2 className='text-gray-500'>Create and Start your AI Mockup Interview</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
        <AddNewinterview></AddNewinterview>
      </div>
       
       {/* Previous interview List */}

       <Interviewlist></Interviewlist>

    </div>

   
  )

}

export default Dashboard
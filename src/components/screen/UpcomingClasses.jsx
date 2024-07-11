import React from 'react'
import ClassCards from '../cards/ClassCards'

function UpcomingClasses() {
  return (
    <React.Fragment>
      <div className='bg-white max-h-full w-[50%] flex flex-col rounded-md'>
        <ClassHeader />
        <ClassContent />
        <ClassFooter />
      </div>
    </React.Fragment>
  )
}



function ClassContent() {
  return (
    <React.Fragment>
      <div className='bg-emerald-100 flex-1 px-10 py-5'>
        <div className='w-full h-full bg-slate-200'>
          <div className='flex bg-[#F6F6F6] w-full h-14 text-sm text-gray-500 gap-12 items-center px-10'>
            <span className=''>Class name</span>
            <span className='ml-auto'>Instructor</span>
            <span className='ml-auto -translate-x-10'>Actions</span>
          </div>
          {/* <ClassCards /> */}
        </div>
      </div>
    </React.Fragment>
  )
}












function ClassHeader() {
  return (
    <header className='h-14 flex items-center px-3 border select-none'>
      <div className='flex flex-col'>
        <span className=' font-medium text-lg'>Upcoming Classes</span>
        <span className='text-xs font-light'>For next 7 days</span>
      </div>
      <div className='ml-auto flex gap-2 text-xs font-medium'>
        <label htmlFor="booked">Booked only</label>
        <input type="checkbox" name="booked" id="booked" />
      </div>
    </header>
  )
}


function ClassFooter() {
  return (
    <footer className='w-full h-20 flex bg-slate-400 rounded-b-md'>

    </footer>
  )
}






export default UpcomingClasses
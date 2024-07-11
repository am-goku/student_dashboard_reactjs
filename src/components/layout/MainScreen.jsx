import React from 'react'
import UpcomingClasses from '../screen/UpcomingClasses'
import AssignmentsCard from '../cards/AssignmentsCard'

function MainScreen() {
  return (
    <React.Fragment>
      <div className='bg-emerald-200 flex-1 p-4 flex justify-center gap-4'>
        <UpcomingClasses />
        <AssignmentsCard />
      </div>
    </React.Fragment>
  )
}

export default MainScreen

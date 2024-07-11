import React from 'react'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import MainScreen from './components/layout/MainScreen'

function App() {

  return (
    <React.Fragment>
      <div className="w-full h-full flex">
        <Sidebar />
        <div className='flex-1 flex flex-col border'>
          <Header />

          <MainScreen />
          
        </div>
      </div>
    </React.Fragment>
  )
}

export default App

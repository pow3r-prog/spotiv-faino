import React from 'react'

import Navigation from 'containers/Navigation/Navigation'

import './Dashboard.scss'

const Dashboard = (): React.ReactElement => {
  return (
    <div className='dashboard'>
      <Navigation />
      <div className='dashboard-content'>children</div>
    </div>
  )
}

export default Dashboard as React.FC

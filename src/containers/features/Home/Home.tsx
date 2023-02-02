import React from 'react'

import './Home.scss'

import MusicContainer from 'components/shared/musicContainer/MusicContainer'

import { data } from './data'

const Home = (): React.ReactElement => {
    return (
        <div className='inner-container'>
            <MusicContainer title='Title' data={data} />
        </div>
    )
}

export default Home as React.FC

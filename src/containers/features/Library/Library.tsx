import React from 'react'
import PlaylistBlock from 'components/shared/playlistBlock/PlaylistBlock'

import './Library.scss'

import AddIcon from 'assets/img/libraryPage/AddIcon.svg'

import { data } from './data'

const Library = (): React.ReactElement => {
    return (
        <div className='inner-container'>
            <div className='library'>
                <div className='create--playlist'>
                    <div className='add--icon-container'>
                        <img src={AddIcon} alt='AddIcon' />
                    </div>
                    <div>Create playlist</div>
                </div>
                <PlaylistBlock data={data} />
            </div>
        </div>
    )
}

export default Library as React.FC

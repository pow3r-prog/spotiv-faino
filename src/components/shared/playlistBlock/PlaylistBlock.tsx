import React from 'react'

import './style.scss'

type TPlaylist = {
    id: string
    playlistImage: string
    playlistName: string
}

interface IData {
    data: TPlaylist[]
}

const PlaylistBlock = ({ data }: IData): React.ReactElement => {
    return (
        <>
            {data.map(item => (
                <div className='playlist' key={item.id}>
                    <img
                        className='playlist--image'
                        src={item.playlistImage}
                        alt='playlistImage'
                    />
                    <div className='playlist--name'>{item.playlistName}</div>
                </div>
            ))}
        </>
    )
}

export default PlaylistBlock

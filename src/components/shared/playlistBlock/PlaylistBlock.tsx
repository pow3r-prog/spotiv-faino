import React from 'react'

import './style.scss'

interface IPlaylist {
  id: string
  plalistImage: string
  playlistName: string
}

interface IData {
  data: IPlaylist[]
}

const PlaylistBlock = ({ data }: IData): React.ReactElement => {
  return (
    <>
      {data.map((item) => (
        <div className='playlist' key={item.id}>
          <img
            className='playlist--image'
            src={item.plalistImage}
            alt='playlistImage'
          />
          <div className='playlist--name'>{item.playlistName}</div>
        </div>
      ))}
    </>
  )
}

export default PlaylistBlock

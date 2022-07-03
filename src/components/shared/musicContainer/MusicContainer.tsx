import React from 'react'

import './style.scss'

type IMusic = {
  id?: string
  musicName?: string
  musicImage?: string
}

type IData = {
  title?: string
  data: IMusic[]
}

const MusicContainer = ({ title, data }: IData): React.ReactElement => {
  return (
    <div className='music--container'>
      <div className='music--container-title'>{title}</div>
      <ul className='music--container-list'>
        {data.map((item) => (
          <li className='container--item' key={item.id}>
            <img
              className='container--item-image'
              src={item.musicImage}
              alt='musicPicture'
            />
            <div className='container--item-name'>{item.musicName}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MusicContainer

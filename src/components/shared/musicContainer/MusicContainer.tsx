import React from 'react'

import './style.scss'

type TMusic = {
  id?: string
  musicName?: string
  musicImage?: string
}

interface IData {
  title?: string
  data: TMusic[]
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

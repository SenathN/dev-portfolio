import React from 'react'
import SkillThumb from './SkillThumb'
import { images } from '../img/ExternalData'

const Skillset = () => {
  return (
    <>
      <h4 className='display-6'>Skills and Abilities</h4>
      <i class="fa-solid fa-user"></i>
      <hr />
      <div className='row mx-auto justify-content-center' style={{ maxWidth: 800 }}>
        {images.icons.map(data => {
          return <SkillThumb key={images.icons.indexOf(data)} data={data} />
        })}

      </div>
    </>
  )
}

export default Skillset
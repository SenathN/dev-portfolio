import React from 'react'
import About from './About'
import Skillset from './Skillset'
import Projects from './Projects'

const Content = () => {
  return (
    <div className='container'>

      <div className='row py-4'>
        <div className='col-sm-6 display-4'>
          {/* image */}
        </div>
        <p className='col-sm-6 display-4'>Developer with an eye for <span style={{ fontWeight: 600 }}>creativity</span> and <span style={{ fontWeight: 600 }}>problem solving</span></p>
      </div>

      {/* about */}
      <About />

      {/* skillset */}
      <Skillset />

      {/* projects */}
      <Projects />
    </div>
  )
}

export default Content
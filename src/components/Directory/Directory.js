import React, { useState, useEffect } from 'react'

import MenuItem from '../MenuItem/MenuItem'
import './Directory.scss'
import { DIRECTORY_DATA } from './DirectoryData'

const Directory = () => {

  const [section, setSection] = useState([])

  useEffect(() => {
    setSection(DIRECTORY_DATA)
  }, [])

  return (
    <div className='directory-menu'>
      { section.map(({ id, ...sectionProps }) =>
        <MenuItem key={ id } { ...sectionProps }/>,
      ) }
    </div>
  )
}

export default Directory

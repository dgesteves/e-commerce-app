import React from 'react'

import Item from '../Item/Item'
import './Preview.scss'

const Preview = ({ title, items }) => {
  return (
    <div className='preview'>
      <h1 className="title">
        { title.toUpperCase() }
      </h1>
      <div className="preview-item">
        { items
          .filter((_, index) => index < 4)
          .map(
            ({ id, ...previewProps }) => <Item
              key={ id } { ...previewProps }/>) }
      </div>
    </div>
  )
}

export default Preview

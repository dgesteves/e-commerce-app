import React from 'react'

import './Item.scss'

const Item = ({ name, imageUrl, price }) => {
  return (
    <div className='item'>
      <div className="image"
           style={ { backgroundImage: `url(${ imageUrl })` } }/>
      <div className="footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>
    </div>
  )
}

export default Item

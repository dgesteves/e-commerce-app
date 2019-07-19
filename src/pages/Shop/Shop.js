import React, { useState, useEffect } from 'react'
import { SHOP_DATA } from './ShopData'
import Preview from '../../components/Preview/Preview'

const Shop = () => {

  const [collection, setCollection] = useState([])

  useEffect(() => {
    setCollection(SHOP_DATA)
  }, [])

  return (
    <div className='shop-page'>
      { collection.map(
        ({ id, ...shopProps }) => <Preview key={ id } { ...shopProps }/>) }
    </div>
  )
}

export default Shop

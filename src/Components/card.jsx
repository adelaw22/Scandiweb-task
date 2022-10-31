import { useState } from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ sku, name, price, value, setIsChecked, isChecked }) => {
  const handleChecked = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <Card>
      <Card.Body>
        <input
          type="checkbox"
          className="delete-checkbox"
          onChange={handleChecked}
          checked={isChecked}
        />
        <div className="text-center">
          <p>{sku}</p>
          <p>{name}</p>
          <p>{`${price}.00$`}</p>
          <p>{`Size: ${value} MB`}</p>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

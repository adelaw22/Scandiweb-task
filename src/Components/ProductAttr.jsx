import React from 'react'
import InputField from './inputField'

const furnitureVal = [
  {
    label: 'Height',
    idName: 'height',
  },
  {
    label: 'Width',
    idName: 'width',
  },
  {
    label: 'Length',
    idName: 'length',
  },
]

export const DVDAttr = () => {
  return (
    <div id="DVD">
      <InputField formLabel="Size (MB)" inputType="number" idName="size" />
      <p className="mt-1">Please enter the DVD storage size.</p>
    </div>
  )
}

export const BookAttr = () => {
  return (
    <div id="Book">
      <InputField formLabel="Weight (KG)" inputType="number" idName="weight" />
      <p className="mt-1">Please enter the weight of the book.</p>
    </div>
  )
}

export const FurnitureAttr = () => {
  return (
    <div id="Furniture">
      {furnitureVal.map((item, index) => (
        <InputField
          key={index}
          formLabel={`${item.label} (CM)`}
          inputType="number"
          idName={item.idName}
        />
      ))}
      <p className="mt-1">Please provide the above dimensions</p>
    </div>
  )
}

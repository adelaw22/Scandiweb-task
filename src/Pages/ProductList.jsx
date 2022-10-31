import { useState } from 'react'
import { crdData } from '../asset/cardData'
import ProductCard from '../Components/card'
import '../Style/prdList.scss'
import Footer from '../Components/footer'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [cardList, setCardList] = useState(crdData)

  const handleDelete = (index) => {
    let updatedList = [...cardList]

    if (isChecked) {
      updatedList.filter((selected, selectedIndex) => selectedIndex !== index)
    }

    setCardList(updatedList)
  }

  console.log(cardList)
  return (
    <section>
      <div className="container">
        <div className="top-nav">
          <h2>Product List</h2>

          <div>
            <Link to="/add-product">
              <button className="me-4">ADD</button>
            </Link>

            <button onClick={handleDelete} id="delete-product-btn">
              MASS DELETE
            </button>
          </div>
        </div>

        <div className="card-wrapper">
          {cardList.map((data, index) => (
            <ProductCard
              setIsChecked={setIsChecked}
              checked={isChecked}
              key={index}
              sku={data.SKU}
              name={data.name}
              price={data.price}
              value={data.value}
            />
          ))}
        </div>

        <Footer />
      </div>
    </section>
  )
}

export default ProductList

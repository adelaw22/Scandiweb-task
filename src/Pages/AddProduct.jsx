import { useState } from 'react'
import '../Style/addprd.scss'
import Footer from '../Components/footer'
import InputField from '../Components/inputField'
import { Link } from 'react-router-dom'
import { formChar, options } from '../asset/formValues'
import { DVDAttr, BookAttr, FurnitureAttr } from '../Components/ProductAttr'

const AddProduct = () => {
  const [select, setSelect] = useState()

  const handleOptions = (e) => {
    setSelect(e.target.value)
  }

  // console.log(select)

  const attrForm = () => {
    if (select === 'dvd') {
      return (
        <>
          <DVDAttr />
        </>
      )
    }
    if (select === 'book') {
      return (
        <>
          <BookAttr />
        </>
      )
    }
    if (select === 'furniture') {
      return (
        <>
          <FurnitureAttr />
        </>
      )
    }
  }

  return (
    <section>
      <div className="container">
        <div className="top-nav">
          <h2>Add Product</h2>

          <div>
            <button className="me-4">Save</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </div>

        <form id="product_form">
          {formChar.map((item, index) => (
            <InputField
              key={index}
              formLabel={item.label}
              inputType={item.type}
              idName={item.id}
            />
          ))}

          <div className="d-flex mb-4">
            <label className="form-label ">Type Switcher</label>
            <select
              className="form-select"
              id="productType"
              aria-label="Default select example"
              value={select}
              onChange={handleOptions}
            >
              {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>{attrForm()}</div>
        </form>

        <div style={{ position: 'absolute', bottom: '-30px', width: '82%' }}>
          <Footer />
        </div>
      </div>
    </section>
  )
}

export default AddProduct

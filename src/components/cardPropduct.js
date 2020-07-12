import React from 'react'
import Product from '../constants/propductsConstants'
import { Link } from 'react-router-dom'


const CardProduct = () => {
  return (
    <>
      {
        Product.map((item, i) => {
          return (
            <div key={i} className="col-md-3 p-2">
              <div className="card">
                <img src={item.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <Link className="" to={"/Productos/"+item.url}>Galería de imágenes</Link>
                </div>
              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default CardProduct;

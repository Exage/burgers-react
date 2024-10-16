import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lottie from 'react-lottie-player'

import { Product } from './Product'
import burgerLoader from '../config/burger.json'

export const Products = ({ handleProductClick }) => {

    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            axios.get('https://burgers-api-three.vercel.app/api/products')
                .then(response => {
                    setProducts(response.data.data)
                })
                .finally(() => {
                    setLoading(false)
                })
        }

        fetchProducts()
    }, [])

    return (
        <section className="products" id="products">
            <div className="container">

                <h2 className="products-title common-title">выберите свой бургер</h2>

                {loading && (
                    <div className="products-loader">
                        <Lottie
                            loop
                            animationData={burgerLoader}
                            play

                            style={{ width: 250, height: 250 }}
                        />
                    </div>
                )}

                {products && (
                    <div className="products-items">
                        {products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                handleProductClick={handleProductClick}
                            />
                        ))}
                    </div>
                )}


            </div >
        </section >
    )
}

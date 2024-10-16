import React, { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

import cart from '../assets/images/cart.svg'

export const Product = ({ product, handleProductClick }) => {

    const { currency, currencyMultiplier } = useContext(CurrencyContext)
    const { title, text, price, grams, image } = product

    return (
        <div className="products-item common-card">
            <div className="products-item-image">
                <img src={`https://burgers-api-three.vercel.app/images/${image}`} />
            </div>
            <h3 className="products-item-title">
                {title}
            </h3>
            <p className="products-item-text common-text">
                {text}
            </p>
            <div className="products-item-extra">
                <div className="products-item-info">
                    <div className="products-item-price">{Math.round(price * currencyMultiplier)} {currency}</div>
                    <div className="products-item-weight">{grams} гр</div>
                </div>
                <div className="products-item-action" onClick={() => handleProductClick(`${title} (${Math.round(price * currencyMultiplier)} ${currency})`)}>
                    <button className="btn product-btn">
                        <span>Заказать</span>
                        <span>
                            <img className='icon' src={cart} />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

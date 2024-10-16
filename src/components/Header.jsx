import React, { useContext, useEffect, useState } from 'react'

import logo from '../assets/images/logo.svg'

import { CurrencyContext } from '../context/CurrencyContext'

export const Header = () => {

    const { currency, changeCurrency } = useContext(CurrencyContext)

    const [headerScrolled, setHeaderScrolled] = useState(false)

    useEffect(() => {
        const scrollPage = () => {
            const scrollY = window.scrollY

            if (scrollY > 50) {
                setHeaderScrolled(true)
            } else {
                setHeaderScrolled(false)
            }
        }

        window.addEventListener('scroll', scrollPage)

        return () => {
            window.removeEventListener('scroll', scrollPage)
        }
    }, [])

    const linkClick = (Event) => {
        Event.preventDefault()
        const target = document.querySelector(Event.target.getAttribute('href'))

        if (target) {
            window.scrollBy({ behavior: 'smooth', top: target.getBoundingClientRect().top - 81 })
        }
    }

    return (
        <header className={`header${headerScrolled ? ' header-fixed' : ''}`}>
            <div className="container">

                <div className="logo">
                    <img src={logo} />
                </div>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a href="#why" onClick={linkClick}>Почему у нас</a>
                        </li>
                        <li className="menu-item">
                            <a href="#products" onClick={linkClick}>Меню бургеров</a>
                        </li>
                        <li className="menu-item">
                            <a href="#order" onClick={linkClick}>Оформление заказа</a>
                        </li>
                    </ul>
                </nav>
                <div className="currency" title="Изменить валюту" id="change-currency" onClick={changeCurrency}>
                    {currency}
                </div>

            </div>
        </header>
    )
}

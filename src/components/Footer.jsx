import React from 'react'

import logo from '../assets/images/logo.svg'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="copy">
                    Все права защищены
                </div>
            </div>
        </footer>
    )
}

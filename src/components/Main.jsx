import React from 'react'

import burger from '../assets/images/main/main_burger.png'

export const Main = () => {

    const handleBtn = () => {
        const target = document.querySelector('#products')

        if (target) {
            window.scrollBy({ behavior: 'smooth', top: target.getBoundingClientRect().top - 81 })
        }
    }

    return (
        <section className="main-content">
            <div className="container">

                <div className="main-info">
                    <span className="main-small-info">
                        Новое меню
                    </span>
                    <h1 className="main-title">
                        Бургер Чеддер
                    </h1>
                    <p className="main-text">
                        Мы обновили наше меню, спешите попробовать сезонные новинки и насладиться отличным вкусом наших
                        бургеров. Готовим для вас лучшие бургеры в городе из отборной мраморной говядины.
                    </p>
                    <div className="main-action">
                        <button className="btn" id="main-action-btn" onClick={handleBtn}>Смотреть меню</button>
                    </div>
                </div>

                <img src={burger} alt="Big Burger" className="main-image" />

            </div>
        </section>
    )
}

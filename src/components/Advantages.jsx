import React from 'react'

import advantage_1 from '../assets/images/why/why-item-1.png'
import advantage_2 from '../assets/images/why/why-item-2.png'
import advantage_3 from '../assets/images/why/why-item-3.png'

export const Advantages = () => {
    return (
        <section className="why" id="why">
            <div className="container">
                <h2 className="why-title common-title">почему нас выбирают?</h2>
                <div className="why-items">
                    <div className="why-item">
                        <img src={advantage_1} className="why-item-img" />
                            <h3 className="why-item-title">
                                Авторские рецепты
                            </h3>
                            <p className="why-item-text common-text">
                                Наши бургеры обладают уникальным сочетанием вкусов и не похожи ни на какие другие. Мы тщательно
                                отбираем лучшие ингредиенты и сочетания вкусов для нашего меню.
                            </p>
                    </div>
                    <div className="why-item">
                        <img src={advantage_2} className="why-item-img" />
                            <h3 className="why-item-title">
                                Мраморная говядина
                            </h3>
                            <p className="why-item-text common-text">
                                Для наших бургеров мы используем отборную 100% мраморную говядину, которую закупаем
                                исключительно у фермеров. Мы уверены в качестве нашего мяса.
                            </p>
                    </div>
                    <div className="why-item">
                        <img src={advantage_3} className="why-item-img" />
                            <h3 className="why-item-title">
                                Быстрая доставка
                            </h3>
                            <p className="why-item-text common-text">
                                Мы доставляем в пределах МКАД за 30 минут, а если не успеем — доставка бесплатно. Мы тщательно
                                упаковываем наши бургеры, чтобы по дороге они не остыли.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

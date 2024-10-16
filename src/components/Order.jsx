import React, { useEffect, useState } from 'react'

import burger from '../assets/images/order/order-burger-bg.png'

export const Order = ({ orderRef, productName }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const [nameError, setNameError] = useState(false)
    const [phoneError, setPhoneError] = useState(false)
    const [productError, setProductError] = useState(false)

    const [nameTouched, setNameTouched] = useState(false)
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [productTouched, setProductTouched] = useState(false)

    const [disableBtn, setDisableBtn] = useState(true)

    useEffect(() => {
        if (nameError || phoneError || productError) {
            setDisableBtn(true)
        } else {
            setDisableBtn(false)
        }
    }, [nameError, phoneError, productError])

    const validateName = () => {
        const regex = /^[A-Za-zА-Яа-яЁё]+$/
        if (name.trim() !== '' && regex.test(name)) {
            setNameError(false)
        } else {
            setNameError(true)
        }
    }

    const validatePhone = () => {
        const regex = /^\+\d{1,15}$/
        if (phone.trim() !== '' && regex.test(phone)) {
            setPhoneError(false)
        } else {
            setPhoneError(true)
        }
    }

    const validateProduct = () => {
        if (productName.trim() === '') {
            setProductError(true)
        } else {
            setProductError(false)
        }
    }

    useEffect(() => {
        validateProduct()
    }, [productName])

    const handleNameBlur = () => {
        setNameTouched(true)
        validateName()
    }

    const handlePhoneBlur = () => {
        setPhoneTouched(true)
        validatePhone()
    }

    const handleSubmit = () => {
        if (!productName || !name || !phone) {
            alert('Заполните все поля!')
            return
        }

        alert(`🔥 Спасибо за заказ, ${name}!\n📞 Скоро с вами свяжутся по номеру ${phone}\n🍔 Ваш бургер: ${productName}`)
    }

    return (
        <section className="order" id="order" ref={orderRef}>
            <div className="container">
                <h2 className="order-title common-title">оформление заказа</h2>
                <img src={burger} alt="Burger in the box" className="order-image" />
                <div className="order-form common-card">
                    <p className="order-form-text common-text">
                        Заполните все данные и наш менеджер свяжется с вами для подтверждения заказа
                    </p>
                    <div className="order-form-inputs">
                        <div className={`order-form-input${productError && productTouched ? ' error' : ''}`}>
                            <input
                                type="text"
                                placeholder="Выберите товар в списке"
                                readOnly
                                value={productName}
                                onBlur={() => setProductTouched(true)}
                            />
                        </div>
                        <div className={`order-form-input${nameError && nameTouched ? ' error' : ''}`}>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                onBlur={handleNameBlur} 
                            />
                        </div>
                        <div className={`order-form-input${phoneError && phoneTouched ? ' error' : ''}`}>
                            <input
                                type="text"
                                placeholder="Ваш телефон"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                onBlur={handlePhoneBlur}
                            />
                        </div>
                        <button
                            className="btn"
                            id="order-btn"
                            disabled={disableBtn}
                            onClick={handleSubmit}
                        >Оформить заказ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

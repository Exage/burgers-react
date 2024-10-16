import React, { createContext, useState } from "react"
import { currencyList } from "../config/currencyList"

export const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {

    const [currency, setCurrency] = useState('$')
    const [currencyMultiplier, setCurrencyMultiplier] = useState(1)
    const [currencyIndex, setCurrencyIndex] = useState(0)

    const changeCurrency = () => {
        const currencyListArr = Object.keys(currencyList)
        const nextIndex = (currencyIndex + 1) % currencyListArr.length
        setCurrencyIndex(nextIndex)

        const currentCurrency = currencyList[currencyListArr[nextIndex]]
        setCurrency(currentCurrency.symbol || currencyListArr[nextIndex])
        setCurrencyMultiplier(currentCurrency.multiplier)
    }

    return (
        <CurrencyContext.Provider value={{ currency, currencyMultiplier, changeCurrency }}>
            {children}
        </CurrencyContext.Provider>
    )
}
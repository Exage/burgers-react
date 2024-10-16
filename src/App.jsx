import React, { useRef, useState } from 'react'
import './App.scss'

import { Header } from './components/Header'
import { Main } from './components/Main'
import { Advantages } from './components/Advantages'
import { Products } from './components/Products'
import { Order } from './components/Order'
import { Footer } from './components/Footer'

function App() {

	const [productName, setProductName] = useState('')
	const orderRef = useRef(null)

	const handleProductClick = (name) => {
		setProductName(name)
		window.scrollBy({ top: orderRef.current.getBoundingClientRect().top - 81, behavior: 'smooth' })
	}

	return (
		<div className="App">
			<section className="main">
				<Header />
				<Main />
			</section>
			<Advantages />
			<Products handleProductClick={handleProductClick} />
			<Order orderRef={orderRef} productName={productName} />
			<Footer />
		</div>
	)
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import './index.scss'

import { CurrencyProvider } from './context/CurrencyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CurrencyProvider>
			<App />
		</CurrencyProvider>
	</React.StrictMode>
)

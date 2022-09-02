import { useState } from 'react'
import reactLogo from './assets/react.svg';
import ProductShowCase from './components/ProductShowCase' 
import CTAShowCase from './components/CTAShowCase' 
import Newsletter from './components/Newsletter'
import './App.css'
import'./assets/fonts/Inter-3.19/InterWeb/inter.css'
function App() {

  return (
    <div className="App">
      <CTAShowCase/>
      <ProductShowCase title='Produtos em destaque' productQtd={4}/>
      <Newsletter/>
    </div>
  )
}

export default App

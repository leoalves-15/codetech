import { useState } from 'react'
import ProductShowCase from './components/ProductShowCase' 
import CTAShowCase from './components/CTAShowCase' 
import { useMobile } from './hooks/use-is-mobile'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'
import'./assets/fonts/Inter-3.19/InterWeb/inter.css'

function App() {
  const isMobile = useMobile();

  return (
    <div className="App">
      {!isMobile &&(
        <CTAShowCase/>
      )}
      <ProductShowCase title='Produtos em destaque' productQtd={4}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App

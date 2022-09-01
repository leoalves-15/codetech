import { useState } from 'react'
import reactLogo from './assets/react.svg'
import ProductShowCase from './components/ProductShowCase' 
import './App.css'
import'./assets/fonts/Inter-3.19/InterWeb/inter.css'
function App() {

  return (
    <div className="App">
      <ProductShowCase title='Produtos em destaque' productQtd={4}/>
    </div>
  )
}

export default App

import { useState } from "react";
import ProductShowCase from "./components/ProductShowCase";
import CTAShowCase from "./components/CTAShowCase";
import { useScreen } from "./hooks/use-screen";
import Newsletter from "./components/Newsletter";
import CategoryShowCase from "./components/CategoryShowCase";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import "./assets/fonts/Inter-3.19/InterWeb/inter.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { isMobile } = useScreen();

  return (
    <div className="App">
      <Header />
      {!isMobile && <CTAShowCase />}
      <CategoryShowCase />
      <ProductShowCase title="Produtos em destaque" productQtd={4} />
      <Newsletter />
      {isMobile && <NavigationBar />}
      <Footer />
    </div>
  );
}

export default App;

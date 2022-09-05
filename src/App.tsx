import ProductShowCase from "./components/ProductShowCase";
import CTAShowCase from "./components/CTAShowCase";
import { useScreen } from "./hooks/use-screen";
import Newsletter from "./components/Newsletter";
import CategoryShowCase from "./components/CategoryShowCase";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import BuyTogetherShowCase from "./components/BuyTogetherShowCase";
import MainBanner from "./components/MainBanner";
import "./App.css";
import "./assets/fonts/Inter-3.19/InterWeb/inter.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  const { isMobile } = useScreen();

  return (
    <div className="App">
      <Header />
      <MainBanner />
      <CategoryShowCase />
      <ProductShowCase title="Produtos em destaque" productQtd={4} />
      {!isMobile && <CTAShowCase />}
      <BuyTogetherShowCase title="Novidade" />
      {!isMobile && (
        <ProductShowCase title="Produtos também pode gostar" productQtd={4} />
      )}
      <Newsletter />
      {isMobile && <NavigationBar />}
      {isMobile && <MobileMenu />}
      <Footer />
    </div>
  );
}

export default App;

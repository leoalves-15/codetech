import "../App.css";
import "../assets/fonts/Inter-3.19/InterWeb/inter.css";
import NavigationBar from "../components/NavigationBar";
import { useScreen } from "../hooks/use-screen";
import Cart from "../components/Cart";

function CartPage() {
  const { isMobile } = useScreen();

  return (
    <div className="App">
      <Cart/>
      {isMobile && <NavigationBar />}
    </div>
  );
}

export default CartPage;

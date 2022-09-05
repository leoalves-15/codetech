import React, { FC, useEffect, useState } from "react";
import { ContainCart, OrderResume } from "./styles";
import { BuyButton, ProductPrice } from "../ProductCard/styles";
import { connect } from "react-redux";
import { CartType } from "./cart.type";
import CartItem from "./Components/ItemCart";
import toReal from "../../helps/currency";
import { getProductsByID } from "../../utils/services/getProductsByID";
import { ProductCardType } from "../ProductCard/ProductCard.type";

const Cart: FC<CartType> = (props) => {
  const { cart = [] } = props;
  const [products, setProducts] = useState<ProductCardType[]>([]);
  const [valueTotal, setValueTotal] = useState(0);

  const callProducts = async (ids: number[]) => {
    const response = await getProductsByID(ids);
    setProducts(response);
    return response;
  };

  useEffect(() => {
    let total = 0;
    for (var i = 0; i < products.length; i++) {
      let cartqtd = cart?.find((element) => element.id === products[i].id);
      if (cartqtd) total += products[i].SalePrice_Product * cartqtd.qtd;
    }
    setValueTotal(total);
  }, [products]);

  useEffect(() => {
    callProducts(
      cart.map((item) => {
        return item.id;
      })
    );
  }, []);

  return (
    <ContainCart>
      {products?.map((item) => {
        return (
          <>
            {item.Title_Product && (
              <CartItem
                img={item.Thumbnail_Product}
                title={item.Title_Product}
                salePrice={item.SalePrice_Product}
                listPice={item.ListPrice_Product}
                qtd={2}
              />
            )}
          </>
        );
      })}
      <OrderResume>
        <ProductPrice>
          <p></p>
          <p>Total da compra {toReal(valueTotal)}</p>
        </ProductPrice>
        <BuyButton>Finalizar Compra</BuyButton>
      </OrderResume>
    </ContainCart>
  );
};

function mapStateToProps(state: CartType) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(Cart);

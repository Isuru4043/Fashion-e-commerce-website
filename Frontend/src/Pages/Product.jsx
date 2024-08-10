import React from "react";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import RelatedProducts from "../Components/RelatedProducts/RelatedProduct";
const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((item) => item.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;

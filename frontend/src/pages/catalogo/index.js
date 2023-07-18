import Layout from "@/components/Catalogue/Layout";
import React from "react";

const Catalogo = ({ products }) => {
  return (
    <Layout
      textBlack="Anim aute id magna aliqua"
      textOrangeRed="ad ad non sunt."
      data={products}
      page="Catálogo"
    ></Layout>
  );
};

export default Catalogo;

export const getServerSideProps = async () => {
  const getProducts = await fetch(`${process.env.API_URL}/products`);
  const products = await getProducts.json();
  return { props: { products } };
};

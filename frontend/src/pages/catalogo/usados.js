import React from "react";
import Layout from "@/components/Catalogue/Layout";

const Used = ({ productsUsed }) => {
  return (
    <Layout
      textBlack="Catálogo de"
      textOrangeRed="Carros Usados."
      data={productsUsed}
      page="Nuevos"
    ></Layout>
  );
};

export default Used;

export const getStaticProps = async () => {
  const getProductsUsed = await fetch(
    `${process.env.API_URL}/products?condition=1`
  );
  const productsUsed = await getProductsUsed.json();
  return { props: { productsUsed }, revalidate: 86400 };
};

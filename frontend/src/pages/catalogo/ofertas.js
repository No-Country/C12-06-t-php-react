import React from "react";
import Layout from "@/components/Catalogue/Layout";

const Offers = ({ productsOffers }) => {
  return (
    <Layout
      textBlack="Catálogo de"
      textOrangeRed="Ofertas."
      data={productsOffers}
      page="Nuevos"
    ></Layout>
  );
};

export default Offers;

export const getStaticProps = async () => {
  const getProductsOffers = await fetch(
    `${process.env.API_URL}/products?is_offer=1`
  );
  const productsOffers = await getProductsOffers.json();
  return { props: { productsOffers }, revalidate: 86400 };
};

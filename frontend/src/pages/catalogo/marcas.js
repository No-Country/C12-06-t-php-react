import React from "react";
import Layout from "@/components/Catalogue/Layout";

const Brands = ({ productsBrand }) => {
  return (
    <Layout
      textBlack="Anim aute id magna aliqua"
      textOrangeRed="ad ad non sunt."
      data={productsBrand}
      page="Catálogo"
    ></Layout>
  );
};

export default Brands;

export const getStaticProps = async () => {
  const getProductsBrand = await fetch(
    `${process.env.API_URL}/products?brand=1`
  );
  const productsBrand = await getProductsBrand.json();
  return {
    props: { productsBrand },
    revalidate: 86400,
  };
};

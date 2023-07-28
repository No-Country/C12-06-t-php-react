import React from 'react';
import Layout from '@/components/Catalogue/Layout';

const New = ({ productsNew }) => {
    return <Layout textBlack="Catálogo de" textOrangeRed="Carros Nuevos." data={productsNew} page="Nuevos"></Layout>;
};
export default New;

export const getStaticProps = async () => {
    const getProductsNew = await fetch(`${process.env.API_URL}/products?condition=1`);
    const productsNew = await getProductsNew.json();
    return { props: { productsNew }, revalidate: 86400 };
};

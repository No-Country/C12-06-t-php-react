import Layout from "@/components/Layout";
import FormSellMyCar from "@/components/sellMyCar/FormSellMyCar";
import FrequentlyQuestions from "@/components/sellMyCar/FrequentlyQuestions";
import HeaderSellMyCar from "@/components/sellMyCar/HeaderSellMyCar";
import OurProcess from "@/components/sellMyCar/OurProcess";
import ShouldKnow from "@/components/sellMyCar/ShouldKnow";
import React from "react";

const vendermiauto = () => {
  return (
    <Layout page="Vender mi auto">
      <HeaderSellMyCar />
      <section className="w-full flex flex-col items-center justify-center gap-8 mb-8">
        <OurProcess />
        <ShouldKnow/>
        <FrequentlyQuestions/>
        <FormSellMyCar/>
      </section>
    </Layout>
  );
};

export default vendermiauto;

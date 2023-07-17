import Filtered from "@/components/Filterss/Filtered";
import Layout from "@/components/Layout";
import ContentContact from "@/components/contact/ContentContact";
import React from "react";

const index = () => {
  return (
    <Layout page="Catálogo">
      <header className="w-full flex flex-col items-center justify-center text-center gap-4 px-2 md:px-8">
        <h2 className="font-extrabold ">
          Anim aute id magna aliqua{" "}
          <span className="text-OrangeRed">ad ad non sunt.</span>
        </h2>
        <p className="text-DarkGray sm:max-w-[70%] md:max-w-[50%]">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.{" "}
        </p>

        <Filtered />
      </header>
      <section className="w-full flex flex-col items-center justify-center my-8"></section>
      <ContentContact />
    </Layout>
  );
};

export default index;

import React from "react";
import Image from "next/image";

const Filtered = () => {
  const handleSelect = (e) => {
    console.log(e);
  };

  return (
    <article className="w-full flex items-start justify-between flex-wrap gap-4 mt-4">
      <button className="py-2 px-2 flex items-center justify-center gap-2 border border-OrangeRed text-OrangeRed text-sm rounded-md">
        <figure className="w-4">
          <Image
            width={100}
            height={100}
            src="/icons/icon-offer.svg"
            alt="icono oferta"
            className=""
          />
        </figure>
        Ofertas
      </button>
      <div className="flex flex-col items-center justify-center gap-4  sm:flex-row">
        <label htmlFor="city">
          <select
            name="city"
            id="city"
            onChange={(e) => handleSelect(e.target.value)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable value="">
              Ciudad
            </option>
            <option value="buenos_aires">Buenos Aires</option>
            <option value="mar_del_plata">Mar del Plata</option>
            <option value="ciudad_de_santa_fe">Ciudad de Santa Fe</option>
          </select>
        </label>
        <label htmlFor="type">
          <select
            name="type"
            id="type"
            onChange={(e) => handleSelect(e.target.value)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable value="">
              Tipos
            </option>
            <option value="usados">Usados</option>
            <option value="nuevos">Nuevos</option>
            <option value="a_reparar">A reparar</option>
          </select>
        </label>
        <label htmlFor="brand">
          <select
            name="brand"
            id="brand"
            onChange={(e) => handleSelect(e.target.value)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable value="">
              Marcas
            </option>
            <option value="volvo">Volvo</option>
            <option value="tesla">Tesla</option>
            <option value="ford">Ford</option>
          </select>
        </label>
      </div>
    </article>
  );
};

export default Filtered;

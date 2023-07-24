import React from "react";
import Image from "next/image";

const Filtered = ({
  setDataFiltered,
  setTypeFilter,
  setOfferVisible,
  offerVisible,
}) => {
  const handleSelect = (e) => {
    setTypeFilter(e.name);
    setDataFiltered(e.value);
  };

  const handleOffer = () => {
    offerVisible == "1" ? setOfferVisible("0") : setOfferVisible("1");
  };

  return (
    <article className="w-full flex items-start justify-between flex-wrap gap-4 mt-4">
      <button
        onClick={handleOffer}
        className={`${
          offerVisible == "1"
            ? "py-2 px-2 flex items-center justify-center gap-2 border bg-LightOrangeRed border-OrangeRed text-OrangeRed text-sm rounded-md"
            : "py-2 px-2 flex items-center justify-center gap-2 border border-OrangeRed text-OrangeRed text-sm rounded-md"
        }`}
      >
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
            onChange={(e) => handleSelect(e.target)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable="true" value="">
              Ciudad
            </option>
            <option value="buenos_aires">Buenos Aires</option>
            <option value="mar_del_plata">Mar del Plata</option>
            <option value="santa_fe">Ciudad de Santa Fe</option>
            <option value="andersonton">Andersonton</option>
          </select>
        </label>
        <label htmlFor="condition">
          <select
            name="condition"
            id="condition"
            onChange={(e) => handleSelect(e.target)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable="true" value="">
              Tipos
            </option>
            <option value="1">Nuevos</option>
            <option value="2">Usados</option>
          </select>
        </label>
        <label htmlFor="brand">
          <select
            name="brand"
            id="brand"
            onChange={(e) => handleSelect(e.target)}
            className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
          >
            <option disable="true" value="">
              Marcas
            </option>
            <option value="volvo">Volvo</option>
            <option value="tesla">Tesla</option>
            <option value="ford">Ford</option>
            <option value="hyundai">Hyundai</option>
          </select>
        </label>
      </div>
    </article>
  );
};

export default Filtered;

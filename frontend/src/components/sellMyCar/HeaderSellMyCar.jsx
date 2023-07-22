import React from 'react'
import Image from "next/image";

const HeaderSellMyCar = () => {
  return (
    <header className="w-full flex flex-col gap-8">
        <article className="relative w-full">
          <figure className="w-full flex items-center justify-end relative">
            <Image
              width={500}
              height={100}
              src="/sellCar/HeaderSellMyCar.svg"
              alt="imagen encabezado"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="absolute w-full h-[60px] left-0 right-0 bottom-[.7em] m-auto bg-grayCient z-[-1] s:h-[100px] s:bottom-[1em] sm:h-[140px] sm:bottom-[1.3em] base:bottom-[1.7em] base:h-[170px] md:bottom-[2.2em] md:h-[230px] lg:bottom-[3.2em] lg:h-[280px]"></div>
            <div className="absolute top-0 right-0 bottom-0 left-0 m-auto w-full flex flex-col items-center justify-center text-center gap-1">
              <h2 className="text-White font-extrabold text-[.8em] s:text-base sm:text-xl base:text-2xl md:text-4xl">
                Vender mi auto
                <br /> con AutoApp
              </h2>
              <p className="text-White max-w-[70%] text-[.5em] s:text-xs sm:text-sm base:text-base md:text-lg">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.{" "}
              </p>
              <div className="hidden w-full s:flex items-center justify-center gap-4 mt-4 text-sm base:text-base">
                <button className="py-1 px-2 bg-White text-OrangeRed rounded-md sm:py-2 sm:px-3">
                  Get started
                </button>
                <button className="py-1 px-2 bg-OrangeRed text-White rounded-md sm:py-2 sm:px-3">
                  Live demo
                </button>
              </div>
            </div>
          </figure>
          <div className="w-full flex items-center justify-center gap-4 mt-4 text-xs s:hidden">
            <button className="py-1 px-2 bg-White text-OrangeRed border border-OrangeRed rounded-md">
              Get started
            </button>
            <button className="py-1 px-2 bg-OrangeRed text-White rounded-md">
              Live demo
            </button>
          </div>
        </article>
        <article className="w-full flex flex-col text-center gap-4">
          <p className="text-SlateGray font-semibold text-xs sm:text-sm base:text-lg">
            Trusted by over 5 very average small businesses
          </p>
          <div className="scrollVisible overflow-x-auto w-full flex items-center gap-8 px-4 base:overflow-x-hidden base:justify-around">
            <figure className="min-w-[120px] h-8 sm:h-12">
              <Image
                width={100}
                height={100}
                src="/sellCar/logo-tuple.svg"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </figure>
            <figure className="min-w-[120px] h-8 sm:h-12">
              <Image
                width={100}
                height={100}
                src="/sellCar/logo-mirage.svg"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </figure>
            <figure className="min-w-[120px] h-8 sm:h-12">
              <Image
                width={100}
                height={100}
                src="/sellCar/logo-static.svg"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </figure>
            <figure className="min-w-[120px] h-8 sm:h-12">
              <Image
                width={100}
                height={100}
                src="/sellCar/logo-transitor.svg"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </figure>
            <figure className="min-w-[120px] h-8 sm:h-12">
              <Image
                width={100}
                height={100}
                src="/sellCar/logo-workcation.svg"
                alt="image"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </figure>
          </div>
        </article>
      </header>
  )
}

export default HeaderSellMyCar
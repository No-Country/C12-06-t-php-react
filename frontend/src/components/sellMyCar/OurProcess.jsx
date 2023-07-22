import Image from "next/image";
import React from "react";

const OurProcess = () => {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-4 text-center base:flex-row base:items-start base:mt-16">
      <figure className="w-full h-[300px] base:h-[500px]">
        <Image
          width={100}
          height={100}
          src="/sellCar/image-persons.svg"
          alt="imagen de personas"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </figure>
      <div className="w-full flex flex-col px-2">
        <header className="w-full flex flex-col items-start gap-1 mb-4">
          <p className="text-xs text-OrangeRed md:text-sm">Work with us</p>
          <h3 className="font-extrabold s:text-lg sm:text-xl md:text-2xl">
            Nuestro Proceso
          </h3>
        </header>
        <p className="text-xs text-start text-SlateGray sm:text-sm">
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi.
          <br />
          <br />
          Bibendum eu nulla feugiat justo, elit adipiscing. Ut tristique sit
          nisi lorem pulvinar. Urna, laoreet fusce nibh leo. Dictum et et et
          sit. Faucibus sed non gravida lectus dignissim imperdiet a.
        </p>
        <ul className="relative w-full flex flex-col text-xs text-start gap-2 my-4 text-SlateGray sm:text-sm">
          <li className="flex items-center justify-start gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-grayDocient"></div>{" "}
            Quis elit egestas venenatis mattis dignissim.
          </li>
          <li className="flex items-center justify-start gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-grayDocient"></div>
            Cras cras lobortis vitae vivamus ultricies facilisis tempus.
          </li>
          <li className="flex items-center justify-start gap-2">
            <div className="w-[5px] h-[5px] rounded-full bg-grayDocient"></div>
            Orci in sit morbi dignissim metus diam arcu pretium.
          </li>
          <article className="w-full flex items-center justify-end sm:pr-8 md:mt-[-2em]">
            <div className="w-auto m-0 border border-DarkGray rounded-md">
              <button className="px-2 py-1 border-r border-DarkGray text-sm font-semibold text-DarkGray">
                &lt;
              </button>
              <button className="px-2 py-1 border-l border-DarkGray text-sm font-semibold text-DarkGray">
                &gt;
              </button>
            </div>
          </article>
        </ul>
        <p className="text-xs text-start text-SlateGray sm:text-sm">
          Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel
          ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in
          venenatis vestibulum consectetur nibh id. In id ut tempus egestas.
          Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.
        </p>
      </div>
    </article>
  );
};

export default OurProcess;

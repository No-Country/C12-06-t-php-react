import React from "react";
import Image from "next/image";

const ShouldKnow = () => {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-4 text-center base:flex-row-reverse base:items-start base:mt-16">
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
            Que debes saber
          </h3>
        </header>
        <p className="text-xs text-start text-SlateGray sm:text-sm">
          Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
          urna sed consectetur neque tristique pellentesque. Blandit amet, sed
          aenean erat arcu morbi.
        </p>
        <div className="w-full flex flex-col mt-4 gap-2">
          <p className="text-sm font-semibold text-start s:text-base">
            Cómo es diferente
          </p>
          <p className="text-xs text-start text-SlateGray sm:text-sm">
            Tincidunt integer commodo, cursus etiam aliquam neque, et.
            Consectetur pretium in volutpat, diam. Montes, magna cursus nulla
            feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu
            proin massa, lectus. Diam rutrum posuere donec ultricies non morbi.
            Mi a platea auctor mi.
            <br />
            <br />
            Mauris ullamcorper imperdiet nec egestas mi quis quam ante
            vulputate. Vel faucibus adipiscing lacus, eget. Nunc fermentum id
            tellus donec. Ut metus odio sit sit varius non nunc orci. Eu, mi
            neque, ornare suspendisse amet, nibh. Facilisi volutpat lectus id
            sapien dis mauris rhoncus. Est rhoncus, interdum imperdiet ac eros,
            diam mauris, tortor. Risus id sit molestie magna.
          </p>
        </div>
      </div>
    </article>
  );
};

export default ShouldKnow;

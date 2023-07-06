import React from "react";
import Image from "next/image";
import phone from "../../../public/icons/Phone.svg";
import mail from "../../../public/icons/Mail.svg";

const Lorem = () => {
  return (
    <article className="w-full h-full bg-OrangeRed">
      <div className="w-full flex flex-col items-start justify-start p-2 gap-8 tablet:pl-5 tablet:pt-8 tablet:pr-5 tablet:pb-8 laptop:pl-28 laptop:pt-20 laptop:pr-12 laptop:pb-20">
        <header className="w-full flex items-start flex-col gap-4  text-White">
          <h2 className="font-extrabold text-xl">Contacto</h2>
          <p className="text-base">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </header>
        <p className="text-White">
          742 Evergreen Terrace
          <br />
          Springfield, OR 12345
        </p>
        <article className="flex flex-col items-start gap-2">
          <figure className="flex items-center gap-2 text-White">
            <Image src={phone} alt="icono telefono" className="w-6 h-6" />
            <figcaption>+1 (555) 123-4567</figcaption>
          </figure>
          <figure className="flex items-center gap-2 text-White">
            <Image src={mail} alt="icono mail" className="w-6 h-6" />
            <figcaption>support@example.com</figcaption>
          </figure>
        </article>
        <p className="text-White mb-4">
          Looking for careers?{" "}
          <span className="border-b-2">View all job openings.</span>
        </p>
      </div>
    </article>
  );
};

export default Lorem;

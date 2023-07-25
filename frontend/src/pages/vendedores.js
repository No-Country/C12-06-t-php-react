import Layout from '@/components/Layout';
import ContentContact from '@/components/contact/ContentContact';
import Image from 'next/image';
import React from 'react';

const vendedores = () => {
    const handleSelect = (e) => {
        console.log(e);
    };

    return (
        <Layout page="Vendedores">
            <header className="w-full flex flex-col items-center justify-center text-center gap-4 mb-8 px-2 md:px-12">
                <h2 className="font-extrabold sm:text-xl md:text-2xl">
                    Nuestros Vendedores
                    <span className="text-OrangeRed"></span>
                </h2>
                <p className="text-DarkGray max-w-[70%]">
                    Con años de experiencia, nuestro equipo de vendedores está dedicado a guiarte en el proceso de compra de tu
                    auto usado ideal. Desde la selección del vehículo hasta la entrega, los especialistas te brindarán atención
                    personalizada y respuestas a todas tus consultas para que encuentres el auto perfecto.
                </p>
                <label htmlFor="city">
                    <select
                        name="city"
                        id="city"
                        className="w-[150px] py-2 px-2 outline-none border border-LightGray rounded-md"
                        onChange={(e) => handleSelect(e.target.value)}>
                        <option disable="true" value="">
                            Ciudad
                        </option>
                        <option value="buenos_aires">Buenos Aires</option>
                        <option value="mar_del_plata">Mar del Plata</option>
                        <option value="ciudad_de_santa_fe">Ciudad de Santa Fe</option>
                    </select>
                </label>
            </header>
            <section className="w-full grid grid-cols-2  justify-items-center sm:grid-cols-4 md:grid-cols-6">
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
                <article className="w-[200px] p-4  flex flex-col items-center justify-center gap-2">
                    <figure>
                        <Image width={50} height={10} src="/avatar.svg" alt="avatar vendedor" className="" />
                    </figure>
                    <div className="w-full text-center">
                        <p className="">Michael Foster</p>
                        <span className="text-OrangeRed">Co-Founder / CTO</span>
                    </div>
                </article>
            </section>
            <article className="w-full flex items-center justify-end pr-8">
                <div className="w-auto m-0 border border-DarkGray rounded-md">
                    <button className="px-2 border-r border-DarkGray text-xl font-semibold text-DarkGray">&lt;</button>
                    <button className="px-2 border-l border-DarkGray text-xl font-semibold text-DarkGray">&gt;</button>
                </div>
            </article>
            <ContentContact />
        </Layout>
    );
};

export default vendedores;

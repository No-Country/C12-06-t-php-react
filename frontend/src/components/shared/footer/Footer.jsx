import React from 'react';
import { dataFooter } from './dataFooter';
import Link from 'next/link';
import Subscribe from './Subscribe';
import Copyrght from './Copyrght';

const Footer = () => {
    return (
        <footer className="w-full flex flex-col gap-4 pl-4 pt-20 bg-DarkSlateGray md:px-8 md:pt-12">
            <div className="w-full flex flex-col items-start justify-start gap-8 md:flex-row">
                <article className="w-full grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4">
                    <ul className="w-full">
                        <span className="text-DarkGray uppercase">SOLUTIONS</span>
                        {dataFooter.solutions?.map((solution) => (
                            <li key={solution.id} className="text-LightGray">
                                <Link href="#">{solution.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="w-full">
                        <span className="text-DarkGray uppercase">Company</span>
                        {dataFooter.company?.map((solution) => (
                            <li key={solution.id} className="text-LightGray">
                                <Link href="#">{solution.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="w-full">
                        <span className="text-DarkGray uppercase">Support</span>
                        {dataFooter.support?.map((solution) => (
                            <li key={solution.id} className="text-LightGray">
                                <Link href="#">{solution.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="w-full">
                        <span className="text-DarkGray uppercase">Legal</span>
                        {dataFooter.legal?.map((solution) => (
                            <li key={solution.id} className="text-LightGray">
                                <Link href="#">{solution.title}</Link>
                            </li>
                        ))}
                    </ul>
                </article>
                <article className="w-full flex flex-col items-start justify-start gap-4 pr-4 md:w-[60%]">
                    <p className="uppercase font-semibold text-DarkGray">Subscribe to our newsletter</p>
                    <p className="text-LightGray">The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <Subscribe />
                </article>
            </div>
            <hr className="w-[95%] border-DimGray pr-4 my-8 md:w-[100%]" />
            <Copyrght />
        </footer>
    );
};

export default Footer;

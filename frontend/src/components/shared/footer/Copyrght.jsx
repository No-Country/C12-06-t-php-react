import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import facebook from '../../../../public/icons/facebook.svg';
import instagram from '../../../../public/icons/instagram.svg';
import twitter from '../../../../public/icons/twitter.svg';
import github from '../../../../public/icons/github.svg';
import social from '../../../../public/icons/social.svg';

const Copyrght = () => {
    return (
        <article className="w-full flex flex-col gap-8 pb-12 md:flex-row-reverse md:justify-between">
            <ul className="w-full flex items-center justify-start gap-4 md:w-auto">
                <li>
                    <Link href="#">
                        <Image src={facebook} alt="" className="" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={instagram} alt="" className="" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={twitter} alt="" className="" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={github} alt="" className="" />
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <Image src={social} alt="" className="" />
                    </Link>
                </li>
            </ul>

            <span className="text-DarkGray uppercase">© 2020 Workflow, Inc. All rights reserved.</span>
        </article>
    );
};

export default Copyrght;

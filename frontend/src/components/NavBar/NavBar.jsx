import React from "react";
import ButtomPrimary from "../Botones/ButtomPrimary";
import { useMedia } from "@/hooks/useMedia";
import { useRouter } from "next/router";

const NavBar = () => {
    const media = useMedia()
    const router = useRouter()

    const handleClick =(e)=>{
        e.preventDefault()
        router.push('/')
    }
    return (
        <div className="flex justify-between  py-[20px]">
            <ul className={`flex justify-around text-[#6B7280] items-center cursor-pointer w-[100%] pl-[20px] pr-[20px]
            ${
                (media === 'mobile' || media === 'tablet' || media === 'smallDesktop')
                ? 'flex-col'
                : ''
            }
            `}>
                <img src="/logo.svg" onClick={handleClick}/>
                <select className=" cursor-pointer" size="1">
                    <option selected>Catálogo de autos</option>
                    <option>opcion 1</option>
                    <option>opcion 2</option>
                    <option>opcion 3</option>
                </select>
                <select className=" cursor-pointer" size="1">
                    <option selected>Puntos de venta</option>
                    <option>opcion 1</option>
                    <option>opcion 2</option>
                    <option>opcion 3</option>
                </select>
                <li className="">Vender mi auto</li>
                <li className="">Financiacion</li>
                <li className="">Nosotros</li>
                <ButtomPrimary text='Contáctenos' />
            </ul>
        </div>
    )
}

export default NavBar;
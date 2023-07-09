import React from "react";
import ButtomPrimary from "../Botones/ButtomPrimary";

const NavBar = () => {
    return (
        <div className="flex justify-between px-[80px] py-[20px] w-[100%]">
            <ul className=" flex text-[#6B7280]  pr-[100px] items-center cursor-pointer">
                <img src="/logo.svg" />
                <select className="mx-[40px] cursor-pointer" size="1">
                    <option selected>Catálogo de autos</option>
                    <option>opcion 1</option>
                    <option>opcion 2</option>
                    <option>opcion 3</option>
                </select>
                <select className="mr-[40px] cursor-pointer" size="1">
                    <option selected>Puntos de venta</option>
                    <option>opcion 1</option>
                    <option>opcion 2</option>
                    <option>opcion 3</option>
                </select>
                <li className="pr-[40px]">Vender mi auto</li>
                <li className="pr-[40px]">Financiacion</li>
                <li className="pr-[40px]">Nosotros</li>
            </ul>
            <ButtomPrimary text='Contáctenos' />
        </div>
    )
}

export default NavBar;
import Image from 'next/image';
import { Icons } from '../Icons';

export const TeamCard = ({ data }) => {
    return (
        <div className="flex flex-col md:w-96 w-80 gap-4">
            {/* <img className=" h-64 rounded-lg shadow-lg" src="https://picsum.photos./300" /> */}
            <Image
                width={500}
                height={300}
                className="rounded-lg shadow-lg h-64 object-cover"
                src={data.path}
                alt="Perfil equipo"
            />
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold">{data.name}</h3>
                    <h4 className="text-lg text-OrangeRed font-semibold">{data.role}</h4>
                </div>
                <p className="text-lg text-SlateGray">{data.text}</p>
                <div className="flex gap-6 fill-DarkGray [&>span]:cursor-pointer">
                    <span>{Icons.social.twitter}</span>
                    <span>{Icons.social.linkedin}</span>
                </div>
            </div>
        </div>
    );
};

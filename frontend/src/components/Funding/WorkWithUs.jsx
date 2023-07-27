import Image from 'next/image';
import { GrayParagraph } from '../GrayParagraph';

export const WorkWithUs = () => {
    return (
        <section className="flex overflow-hidden md:flex-row flex-col gap-14 py-16 px-[5%] items-center">
            <div className="md:w-1/2 overflow-hidden sm:h-full h-56 w-full">
                {/* <img className="object-cover w-full h-full" src="https://picsum.photos/600" /> */}
                <Image width={500} height={500} className="object-cover w-full h-full" src="/funding/requirements.webp" />
            </div>
            <div className="md:w-1/2 h-full flex justify-center">
                <div className="flex flex-col justify-center gap-4">
                    <h2 className="text-OrangeRed uppercase font-semibold">documentos & formulario</h2>
                    <h3 className="font-bold text-4xl">Requisitos para la Financiación:</h3>
                    <ul className="text-SlateGray list-disc list-inside text-lg">
                        <li>Ser mayor de 18 años y contar con residencia en Argentina.</li>
                        <li>Presentar documentación de identidad vigente.</li>
                        <li>Completar el formulario de solicitud de financiamiento con información precisa y veraz.</li>
                    </ul>

                    <GrayParagraph>
                        En AutoApp, queremos que obtengas tu auto usado de manera sencilla y segura. Nuestra financiación te
                        brinda la oportunidad de adquirir el vehículo que deseas, con planes a tu medida y atención personalizada.
                    </GrayParagraph>
                    <GrayParagraph>
                        <span className="font-bold">¡No dejes que la oportunidad pase! </span>
                        Ponte en contacto con nuestro equipo de financiamiento y comienza hoy mismo el camino hacia la conducción
                        de tu auto usado ideal.
                    </GrayParagraph>
                </div>
            </div>
        </section>
    );
};

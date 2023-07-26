import { Score } from './Score';

export const Reviews = () => {
    const data = [
        {
            score: 4,
            exp: 'Es una buena vendedora',
            comment: 'Mi experiencia es... Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. ',
        },
        {
            score: 3,
            exp: 'Mala experiencia',
            comment: 'Mi experiencia es... Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. ',
        },
        {
            score: 5,
            exp: 'Excelente persona',
            comment: 'Mi experiencia es... Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. ',
        },
    ];

    // Pasar score por props

    return (
        <section>
            <h2 className="text-xl font-medium">Reseñas</h2>
            <div className="flex flex-col gap-2 mb-2">
                <span className="text-sm text-SlateGray">Buena reputación</span>
                <Score />
            </div>
            <div className="hidden md:flex flex-col gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <span className="text-sm text-SlateGray">
                            {item.score} Estrellas | {item.exp}
                        </span>
                        <p className="text-sm">{item.comment}</p>
                    </div>
                ))}
            </div>
            <div className="md:hidden grid divide-y divide-neutral-200 max-w-xl mx-auto mt-4">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span className="text-xl font-medium">Ver reseñas</span>
                            <span className="transition group-open:rotate-180 text-DarkGray">
                                <svg
                                    fill="none"
                                    height="24"
                                    shapeRendering="geometricPrecision"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <div className="flex flex-col gap-4">
                            {data.map((item, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <span className="text-sm text-SlateGray">
                                        {item.score} Estrellas | {item.exp}
                                    </span>
                                    <p className="text-sm">{item.comment}</p>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

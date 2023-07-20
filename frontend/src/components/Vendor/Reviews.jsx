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
            <div className="flex flex-col gap-6">
                {data.map((item, index) => (
                    <div key={index} className="flex flex-col gap-1">
                        <span className="text-sm text-SlateGray">
                            {item.score} Estrellas | {item.exp}
                        </span>
                        <p className="text-sm">{item.comment}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

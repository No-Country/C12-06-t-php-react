export const Faq = () => {
    const content = [
        {
            question: 'Mauris ullamcorper imperdiet nec egestas mi quis quam ante?',
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
        },
        {
            question: 'Mauris ullamcorper imperdiet nec egestas mi quis quam ante?',
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
        },
        {
            question: 'Mauris ullamcorper imperdiet nec egestas mi quis quam ante?',
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
        },
        {
            question: 'Mauris ullamcorper imperdiet nec egestas mi quis quam ante?',
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
        },
        {
            question: 'Mauris ullamcorper imperdiet nec egestas mi quis quam ante?',
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat",
        },
    ];

    return (
        <section className="bg-GhostWhite w-full py-16 px-6">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-4xl mt-5 tracking-tight">Preguntas frecuentes</h2>
            </div>

            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                {content.map((item, index) => (
                    <div key={index} className="py-5">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                                <span>{item.question}</span>
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
                            <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">{item.answer}</p>
                        </details>
                    </div>
                ))}
            </div>
        </section>
    );
};

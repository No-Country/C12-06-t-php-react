import React, { useState } from 'react';

const Subscribe = () => {
    const [emailSubscribe, setEmailSubscribe] = useState('');

    return (
        <article className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
            <label htmlFor="email" className="w-full">
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Entre your email"
                    className="w-full py-2 pl-2 rounded-md outline-none colorPlace"
                    value={emailSubscribe}
                    onChange={(e) => setEmailSubscribe(e.target.value)}
                />
            </label>
            <button className="bg-Coral text-White w-full py-2 pl-2 rounded-md md:w-[180px]">Subscribe</button>
        </article>
    );
};

export default Subscribe;

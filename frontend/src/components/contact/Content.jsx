import React from 'react';
import Form from './Form';
import Lorem from './Lorem';

const Content = () => {
    return (
        <section className="w-full flex flex-col items-center justify-center gap-12 sm:flex-row sm:gap-0">
            <Lorem />
            <Form />
        </section>
    );
};

export default Content;

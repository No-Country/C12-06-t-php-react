import { Formik } from 'formik';
import React from 'react';

const Form = () => {
    return (
        <article className="w-full">
            <Formik
                initialValues={{
                    full_name: '',
                    email: '',
                    phone: '',
                    message: '',
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.full_name) {
                        errors.full_name = 'Requerido';
                    }
                    if (!values.email) {
                        errors.email = 'Requerido';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Correo electrónico no válido';
                    }
                    if (!values.phone) {
                        errors.phone = 'Requerido';
                    }
                    if (!values.message) {
                        errors.message = 'Requerido';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form className="w-full h-full p-5 rounded-xl flex flex-col gap-4 md:w-[80%]" onSubmit={handleSubmit}>
                        <div className="w-full flex flex-col gap-1">
                            <label className="" htmlFor="full_name">
                                <input
                                    className="
                w-full 
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg-White 
                text-Black
                colorPlace
                shadow-sm
                border
                border-LightGray
                
                "
                                    type="text"
                                    name="text"
                                    id="full_name"
                                    placeholder="Nombre"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.full_name}
                                />
                            </label>
                            {errors.full_name && touched.full_name && <p className="text-error text-xs">{errors.full_name}</p>}
                        </div>
                        <div className=" w-full flex flex-col gap-1">
                            <label className="" htmlFor="email">
                                <input
                                    className="
                w-full 
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg- 
                bg-White 
                text-Black
                colorPlace
                shadow-sm
                border
                border-LightGray
                "
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                            </label>
                            {errors.email && touched.email && <p className="text-error text-xs">{errors.email}</p>}
                        </div>
                        <div className=" w-full flex flex-col gap-1">
                            <label className="inputNumber" htmlFor="phone">
                                <input
                                    className="
                w-full 
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg- 
                bg-White 
                text-Black
                colorPlace
                shadow-sm
                border
                border-LightGray
                "
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="Teléfono"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phone}
                                />
                            </label>
                            {errors.phone && touched.phone && <p className="text-error text-xs">{errors.phone}</p>}
                        </div>

                        <div className=" w-full flex flex-col gap-1">
                            <label className="" htmlFor="message">
                                <textarea
                                    className="
                w-full 
                h-[115px]
                outline-none 
                rounded-md 
                py-2
                ps-2
                bg- 
                bg-White 
                text-Black
                colorPlace
                shadow-sm
                border
                border-LightGray
                resize-none
                "
                                    type="text"
                                    name="message"
                                    id="message"
                                    placeholder="Mensaje"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}></textarea>
                            </label>
                            {errors.message && touched.message && <p className="text-error text-xs">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="block w-[100px] py-2 text-center font-medium text-White bg-[#EA580C] border-none rounded-md">
                            Enviar
                        </button>
                    </form>
                )}
            </Formik>
        </article>
    );
};

export default Form;

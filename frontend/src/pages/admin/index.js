import { Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';

export default function Admin() {
    return (
        <main className="flex flex-col items-center justify-center px-[10%] gap-8 min-h-screen">
            <Image width={300} height={100} src="/logo.svg" alt="logo" className="" />
            <span className="font-extrabold text-3xl">Ingrese a su cuenta</span>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={(values) => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Email requerido';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Correo electrónico no válido';
                    }
                    if (!values.password) {
                        errors.password = 'Password requerido';
                    }
                    // else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i.test(values.password)) {
                    //     errors.password = 'Password no válido';
                    // }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <form className="flex flex-col gap-4 w-full md:w-1/3  " onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email"
                                className="w-full 
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
                border-LightGray"
                                placeholder="Email"
                            />

                            <input
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="password"
                                placeholder="******"
                                className="w-full 
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
                border-LightGray"
                            />
                        </div>
                        {errors.email && touched.email && <p className="text-OrangeRed text-xs">{errors.email}</p>}

                        <button className="bg-OrangeRed py-2 rounded-md text-White">Login</button>
                    </form>
                )}
            </Formik>

            <Link href={'/'} className="text-OrangeRed text-sm font-medium">
                Volver a AutoApp
            </Link>
        </main>
    );
}

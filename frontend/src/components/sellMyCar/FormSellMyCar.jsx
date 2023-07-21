import React from "react";
import { Formik } from "formik";

const FormSellMyCar = () => {
  return (
    <article className="w-full flex flex-col px-2 gap-4 max-w-[600px]">
      <header className="w-full flex flex-col items-center justify-center text-center">
        <h3 className="font-extrabold s:text-lg sm:text-xl md:text-2xl">
          Contact sales
        </h3>
        <p className="text-center text-xs text-SlateGray sm:text-sm">
          Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
          massa dictumst amet. Sapien tortor lacus arcu.{" "}
        </p>
      </header>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          company: "",
          email: "",
          phone_number: "",
          message: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.first_name) {
            errors.first_name = "Requerido";
          }
          if (!values.last_name) {
            errors.last_name = "Requerido";
          }
          if (!values.company) {
            errors.company = "Requerido";
          }
          if (!values.email) {
            errors.email = "Requerido";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Correo electrónico no válido";
          }
          if (!values.phone_number) {
            errors.phone_number = "Requerido";
          }
          if (!values.message) {
            errors.message = "Requerido";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="w-full flex items-center justify-between gap-4">
              <label htmlFor="firstName" className="flex flex-col gap-2">
                First name
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  className="w-full py-2 border border-LightGray rounded-md outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                />
                {errors.first_name && touched.first_name && (
                  <p className="text-OrangeRed text-xs">{errors.first_name}</p>
                )}
              </label>

              <label htmlFor="lastName" className="flex flex-col gap-2">
                Last name
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  className="w-full py-2 border border-LightGray rounded-md outline-none"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                />
                {errors.last_name && touched.last_name && (
                  <p className="text-OrangeRed text-xs">{errors.last_name}</p>
                )}
              </label>
            </div>
            <label htmlFor="company" className="flex flex-col gap-2">
              Company
              <input
                type="text"
                id="company"
                name="company"
                className="w-full py-2 border border-LightGray rounded-md outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company}
              />
              {errors.company && touched.company && (
                <p className="text-OrangeRed text-xs">{errors.company}</p>
              )}
            </label>
            <label htmlFor="email" className="flex flex-col gap-2">
              Email
              <input
                type="email"
                id="email"
                name="email"
                className="w-full py-2 border border-LightGray rounded-md outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="text-OrangeRed text-xs">{errors.email}</p>
              )}
            </label>
            <label htmlFor="phoneNumber" className="flex flex-col gap-2">
              Phone Number
              <input
                type="text"
                id="phoneNumber"
                name="phone_number"
                className="w-full py-2 border border-LightGray rounded-md outline-none"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone_number}
              />
              {errors.phone_number && touched.phone_number && (
                <p className="text-OrangeRed text-xs">
                  {errors.compaphone_numberny}
                </p>
              )}
            </label>
            <label className="flex flex-col gap-2" htmlFor="message">
              Message
              <textarea
                className="w-full h-[115px] border border-LightGray rounded-md outline-none resize-none"
                type="text"
                name="message"
                id="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              ></textarea>
              {errors.message && touched.message && (
                <p className="text-OrangeRed text-xs">{errors.message}</p>
              )}
            </label>
            <div className="w-full flex items-center justify-center">
              <p className="text-xs">
                By selecting this, you agree to the <b>Privacy Policy</b> and{" "}
                <b>Cookie Policy.</b>
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-OrangeRed text-White"
            >
              Let’s talk
            </button>
          </form>
        )}
      </Formik>
    </article>
  );
};

export default FormSellMyCar;

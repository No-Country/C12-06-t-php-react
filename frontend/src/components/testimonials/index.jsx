import React from "react";

const businness = [
  {
    id: 1,
    name: "Transistor",
  },
  {
    id: 2,
    name: "Mirage",
  },
  {
    id: 3,
    name: "StaticKit",
  },
  {
    id: 4,
    name: "Tuple",
  },
  {
    id: 5,
    name: "Laravel",
  },
  {
    id: 6,
    name: "Statamic",
  },
];

const testimonial = [
    {
        id: 1,
        logo: "Tuple",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. ",
        person: {
            name: "Judith Black",
            job: "CEO, Tuple"
        }
    },
    {
        id: 2,
        logo: "Workcation",
        comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. ",
        person: {
            name: "Joseph Rodriguez",
            job: "CEO, Workcation"
        }
    },
]

export const Testimonials = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <section className="py-16 px-4 md:px-8  text-center">
        <div className="flex justify-center flex-col items-center">
          <h4>Lo que dicen nuestros clientes</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus repellat laudantium.
          </p>
        </div>
          <p className="py-8">
            Trusted by over 5 very average small businesses
          </p>
        <ul className="grid grid-cols-2 gap-[2px] md:grid-cols-3 md:px-8">
          {businness.map((item) => (
            <li key={item.id} className="bg-gray-50 text-gray-400 p-8 flex justify-center items-center">{item.name}</li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col justify-between md:flex-row  gap-[2px] bg-orange-500">
        <div className=" flex flex-col py-12 px-4 md:px-16 flex-1 gap-8 bg-white" >
            <div className="space-y-6">
            {/* TODO: cahnge logo */}
                <h4>{testimonial[0].logo}</h4>
                <p>{testimonial[0].comment}</p>
            </div>
            <div>
                <h4>{testimonial[0].person.name}</h4>
                <p className="text-gray-400">{testimonial[0].person.job}</p>
            </div>
        </div>

        <div className="flex flex-col px-4 md:px-16 py-12 md:pl-16 flex-1 gap-8 bg-white" >
            <div className="space-y-6 ">
            {/* TODO: cahnge logo */}
                <h4>{testimonial[1].logo}</h4>
                <p>{testimonial[1].comment}</p>
            </div>
            <div>
                <h4>{testimonial[1].person.name}</h4>
                <p className="text-gray-400">{testimonial[1].person.job}</p>
            </div>
        </div>
      </section>
    </div>
  );
};

import { TeamCard } from './TeamCard';

export const Team = () => {
    const team = [
        {
            name: 'Emma Dorsey',
            role: 'Senior Front-end Developer',
            text: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
        },
        {
            name: 'Alicia Bell',
            role: 'Junior Copywriter',
            text: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
        },
        {
            name: 'Jenny Wilson',
            role: 'Studio Artist',
            text: 'Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.',
        },
        {
            name: 'Anna Roberts',
            role: 'Partner, Creative',
            text: 'Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.',
        },
    ];
    return (
        <section className="pt-24 flex gap-8 lg:flex-row flex-col">
            <div className="lg:w-1/3 w-full">
                <h2 className="font-bold text-4xl">Nuestro equipo</h2>
                <p className="text-SlateGray text-xl">
                    Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum
                    suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
                </p>
            </div>
            <div className="flex justify-center gap-8 w-full lg:w-2/3 flex-wrap">
                {team.map((item, index) => (
                    <TeamCard key={index} data={item} />
                ))}
            </div>
        </section>
    );
};

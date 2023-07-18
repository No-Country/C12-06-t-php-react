import { TeamCard } from './TeamCard';

export const Team = () => {
    return (
        <section className="pt-24 flex gap-8">
            <div className="w-1/3">
                <h2 className="font-bold text-4xl">Nuestro equipo</h2>
                <p className="text-SlateGray text-xl">
                    Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum
                    suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.
                </p>
            </div>
            <div className="flex gap-8 w-2/3 flex-wrap">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </section>
    );
};

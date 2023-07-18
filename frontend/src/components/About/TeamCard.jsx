import { Icons } from '../Icons';

export const TeamCard = () => {
    return (
        <div className="flex flex-col w-96 gap-4">
            <img className=" h-64 rounded-lg shadow-lg" src="https://picsum.photos./300" />
            <div className="flex flex-col gap-4">
                <div>
                    <h3 className="text-lg font-semibold">Emma Dorsey</h3>
                    <h4 className="text-lg text-OrangeRed font-semibold">Senior Frontend Developer</h4>
                </div>
                <p className="text-lg text-SlateGray">
                    Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis
                    urna maecenas cras. Nisl dictum.
                </p>
                <div className="flex gap-6 fill-DarkGray">
                    <span>{Icons.social.twitter}</span>
                    <span>{Icons.social.linkedin}</span>
                </div>
            </div>
        </div>
    );
};

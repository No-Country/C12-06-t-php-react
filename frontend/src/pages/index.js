import { Testimonials } from '@/components/Testimonials';
import { CardSlider } from '@/components/CardSlider';
import ContentContact from '@/components/contact/ContentContact';
import Carrousel from '@/components/carrousel/Carrousel';
import { getOffers } from '@/services/getOffers';
import { getTrending } from '@/services/getTrending';
import Layout from '@/components/Layout';

const image1 = '/carrousel/carrousel1.svg';
const image2 = '/carrousel/carrousel1.svg';
const image3 = '/carrousel/carrousel1.svg';

export default function Home({ offers, tendencies }) {
    return (
        <Layout page="Inicio">
            <Carrousel image1={image1} image2={image2} image3={image3} />
            <section className="w-full flex flex-col">
                <CardSlider type="offers" data={offers} />
                <CardSlider type="tendencies" data={tendencies} />
                <Testimonials />
            </section>
            <ContentContact />
        </Layout>
    );
}

export const getServerSideProps = async () => {
    const offers = await getOffers();
    const tendencies = await getTrending();

    return { props: { offers, tendencies } };
};

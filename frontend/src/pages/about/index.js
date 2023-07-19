import { AboutHeader } from '@/components/About/AboutHeader';
import { Story } from '@/components/About/Story';
import { Team } from '@/components/About/Team';
import Layout from '@/components/Layout';

export default function About() {
    return (
        <Layout page={'Nosotros'}>
            <AboutHeader />
            <section className="px-[10%] py-24">
                <Story />
                <Team />
            </section>
        </Layout>
    );
}

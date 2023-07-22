import { Faq } from '@/components/Funding/Faq';
import { Header } from '@/components/Funding/Header';
import { Transactions } from '@/components/Funding/Transactions';
import { WorkWithUs } from '@/components/Funding/WorkWithUs';
import Layout from '@/components/Layout';

export default function Funding() {
    return (
        <Layout page={'Financiación'}>
            <Header />
            <section className="px-[10%] py-24">
                <Transactions />
            </section>
            <WorkWithUs />
            <Faq />
        </Layout>
    );
}

import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/shared/footer/Footer';
import ContentContact from '@/components/contact/ContentContact';
import { AboutHeader } from '@/components/About/AboutHeader';
import { Story } from '@/components/About/Story';
import { Team } from '@/components/About/Team';

export default function About() {
    return (
        <>
            <NavBar />
            <AboutHeader />
            <main className="px-[10%] py-24">
                <Story />
                <Team />
            </main>

            <ContentContact />
            <Footer />
        </>
    );
}

import { Inter } from 'next/font/google';
import { Testimonials } from '@/components/Testimonials';
import { CardSlider } from '@/components/CardSlider';
import Footer from '@/components/shared/footer/Footer';
import Content from '@/components/contact/Content';
import Carrousel from '@/components/carrousel/Carrousel';
import NavBar from '@/components/NavBar/NavBar';

const inter = Inter({ subsets: ['latin'] });
const image1 = '/carrousel/carrousel1.svg';
const image2 = '/carrousel/carrousel1.svg';
const image3 = '/carrousel/carrousel1.svg';
export default function Home() {
    return (
        <>
            <NavBar />
            <Carrousel image1={image1} image2={image2} image3={image3} />
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                <CardSlider type="offers" />
                <CardSlider type="tendencies" />
                <Testimonials />
            </main>
            <Content />
            <Footer />
        </>
    );
}

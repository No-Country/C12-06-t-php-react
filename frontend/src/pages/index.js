
import { Inter } from 'next/font/google';
import { Testimonials } from '@/components/Testimonials';
import { CardSlider } from '@/components/CardSlider';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <CardSlider type="offers" />
            <CardSlider type="tendencies" />
            <Testimonials />
        </main>
    );

}

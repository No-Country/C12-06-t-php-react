import { CarDetails } from '@/components/CarDetails/CarDetails';
import { RelatedCars } from '@/components/CarDetails/RelatedCars';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/shared/footer/Footer';

export default function CarDetail() {
    return (
        <>
            <NavBar />
            <div className="px-[10%] py-16">
                <CarDetails />
            </div>
            <RelatedCars />
            <Footer />
        </>
    );
}

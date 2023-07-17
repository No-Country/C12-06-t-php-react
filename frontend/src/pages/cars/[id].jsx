import { CarDetails } from '@/components/CarDetails/CarDetails';
import { RelatedCars } from '@/components/CarDetails/RelatedCars';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/shared/footer/Footer';
import { useProductById } from '@/hooks/useProductById';

export default function CarDetail() {
    const { data, loading } = useProductById();
    return (
        <>
            <NavBar />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div className="px-[10%] py-16">
                        <CarDetails data={data} />
                    </div>
                    <RelatedCars brand={data.brand} id={data.id} />
                </>
            )}
            <Footer />
        </>
    );
}

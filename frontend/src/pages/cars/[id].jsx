import { CarDetails } from '@/components/CarDetails/CarDetails';
import { RelatedCars } from '@/components/CarDetails/RelatedCars';
import NavBar from '@/components/NavBar/NavBar';
import Footer from '@/components/shared/footer/Footer';
import { getProductById } from '@/services/getProductById';
import { getProductsByBrand } from '@/services/getProductsByBrand';

export default function CarDetail({ product, related }) {
    console.log(product);
    return (
        <>
            <NavBar />

            <div className="px-[10%] py-16">
                <CarDetails data={product} />
            </div>
            <RelatedCars data={related} id={product.id} />

            <Footer />
        </>
    );
}
export const getServerSideProps = async ({ query: { id } }) => {
    const product = await getProductById(id);
    const related = await getProductsByBrand(product.brand);

    return { props: { product, related } };
};

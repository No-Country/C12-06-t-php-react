import Layout from '@/components/Layout';
import { Header } from '@/components/Vendor/Header';
import { VendorInfo } from '@/components/Vendor/VendorInfo';
import { VendorProducts } from '@/components/Vendor/VendorProducts';

export default function Vendor() {
    return (
        <Layout page={'Vendedor'}>
            <Header />
            <div className="flex">
                <VendorInfo />
                <VendorProducts />
            </div>
        </Layout>
    );
}

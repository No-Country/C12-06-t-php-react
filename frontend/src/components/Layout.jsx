// import Navbar from './navbar'

import Footer from './shared/footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main className="px-[10%] py-10">{children}</main>
            <Footer />
        </>
    );
}

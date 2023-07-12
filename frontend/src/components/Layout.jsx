import NavBar from './NavBar/NavBar';
import Footer from './shared/footer/Footer';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <main className="px-[10%] py-10">{children}</main>
            <Footer />
        </>
    );
}

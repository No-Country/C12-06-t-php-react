export const Header = () => {
    return (
        <header className="md:h-72 flex md:flex-row flex-col">
            <div className="md:w-1/4">
                <img className="w-full h-full" src="https://picsum.photos/300" />
            </div>
            <div className="bg-OrangeRed h-full md:w-3/4 md:px-28 md:py-16 p-12 flex flex-col items-center gap-4">
                <h2 className="text-White font-bold text-4xl">Autos a la venta</h2>
                <p className="text-White text-xl text-center">
                    Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam
                    in. Ut nisl ornare diam in.
                </p>
            </div>
        </header>
    );
};

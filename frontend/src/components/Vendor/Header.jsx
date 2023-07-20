export const Header = () => {
    return (
        <header className="h-72 flex">
            <div className="w-1/4">
                <img className="w-full h-full" src="https://picsum.photos/300" />
            </div>
            <div className="bg-OrangeRed h-full w-3/4 px-28 py-16 flex flex-col items-center gap-4">
                <h2 className="text-White font-bold text-4xl">Autos a la venta</h2>
                <p className="text-White text-xl text-center">
                    Risus velit condimentum vitae tincidunt tincidunt. Mauris ridiculus fusce amet urna nunc. Ut nisl ornare diam
                    in. Ut nisl ornare diam in.
                </p>
            </div>
        </header>
    );
};

export const SellerInfo = ({ seller, createdAt }) => {
    return (
        <div className="flex gap-3 mt-1">
            <img src="https://picsum.photos/40/40" className="rounded-full w-10 h-10" />
            <div className="flex flex-col">
                <span className="font-bold text-sm">{seller}</span>
                <span className="text-SlateGray text-sm">Publicado: {createdAt}</span>
            </div>
        </div>
    );
};

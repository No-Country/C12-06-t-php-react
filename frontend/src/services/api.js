const baseUrl = process.env.API_URL;

export const productsAPI = `${baseUrl}/products`;

export const ProductsEndpoints = {
    getTrend: `${productsAPI}?is_trend=1`,
    getOffer: `${productsAPI}?is_offer=1`,
    getByBrand: `${productsAPI}?brand=`,
    getByCity: `${productsAPI}?city=`,
};

export const cityEndpoint = `${baseUrl}/cities`;

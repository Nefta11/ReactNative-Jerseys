const URL_API = 'https://api-groseries-json-production.up.railway.app';

export const getProducts = async () => {
    const products = await fetch(URL_API);
    return await products.json();
}

export const deleteProduct = async (barcode) => {
    const res = await fetch(`${URL_API}/De/${barcode}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        }
    });
    return await res.json();
}

export const insertProduct = async (product) => {
    const res = await fetch(URL_API, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(product)
    });
    return await res.json();
}

export const updateProduct = async (barcode, updatedProduct) => {
    const res = await fetch(`${URL_API}/${barcode}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(updatedProduct)
    });
    return await res.json();
}

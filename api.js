const URL_API = 'https://api-json-jerseys-production.up.railway.app/';

export const getClothes = async () => {
    const clothes = await fetch(`${URL_API}`);
    return await clothes.json();
}

export const deleteClothe = async (code) => {
    const res = await fetch(`${URL_API}/${code}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        }
    });
    return await res.json();
}

export const insertClothe = async (clothe) => {
    const res = await fetch(`${URL_API}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(clothe)
    });
    return await res.json();
}

export const updateClothe = async (code, updatedClothe) => {
    const res = await fetch(`${URL_API}/${code}`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(updatedClothe)
    });
    return await res.json();
}

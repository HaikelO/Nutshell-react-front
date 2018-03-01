export const CATEGORIE_SELECTED = "categorie_selected";
export const CART_ADD_PRODUCT = "cart_add_product";

export function selectCategorie(categorie) {
    return {
        type: CATEGORIE_SELECTED,
        payload: categorie
    }
}

export function addProductToCart(product) {
    return {
        type: CART_ADD_PRODUCT,
        payload: product
    }
}
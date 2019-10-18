export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

//action creator
export function addToCart(id,src,price) {
	return {
		type: ADD_TO_CART,
		itemId: id,
		itemSrc: src,
		itemPrice: price,
	};
}

export function removeFromCart(id) {
	return {
		type: REMOVE_FROM_CART,
		removedItemId: id
	};
}

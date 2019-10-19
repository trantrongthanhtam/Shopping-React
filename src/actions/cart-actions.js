export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UP_QUANTITY = "UP_QUANTITY";
export const DOWN_QUANTITY = "DOWN_QUANTITY";

//action creator
export function addToCart(
	id,
	src,
	price,
	priceInNo,
	color = "Đen",
	size = "M"
) {
	return {
		type: ADD_TO_CART,
		itemId: id,
		itemSrc: src,
		itemPrice: price,
		itemPriceInNo: priceInNo,
		itemColor: color,
		itemSize: size
	};
}

export function removeFromCart(id, color, size) {
	return {
		type: REMOVE_FROM_CART,
		removedItemId: id,
		removedItemColor: color,
		removedItemSize: size
	};
}
export function upQuantity(id) {
	return {
		type: UP_QUANTITY,
		itemUpQuantity: id
	};
}
export function downQuantity(id) {
	return {
		type: DOWN_QUANTITY,
		itemDownQuantity: id
	};
}

import {
	ADD_TO_CART,
	REMOVE_FROM_CART,
	UP_QUANTITY,
	DOWN_QUANTITY
} from "../actions/cart-actions";
const defaultState = {
	total: 0,
	cartProducts: []
};
export default function cartReducer(state = defaultState, action) {
	const { cartProducts } = state;
	let updatedCart;
	let calculateTotal = 0;
	switch (action.type) {
		case ADD_TO_CART:
			const {
				itemId,
				itemSrc,
				itemPrice,
				itemPriceInNo,
				itemColor,
				itemSize
			} = action;

			const foundItem = cartProducts.find(
				item =>
					item.name === itemId &&
					item.color === itemColor &&
					item.size === itemSize
			);
			if (foundItem) {
				// item has been added before
				updatedCart = cartProducts.map(item => {
					if (item.name === itemId) {
						return {
							...item,
							quantity: item.quantity + 1
						};
					}
					return item;
				});
			} else {
				updatedCart = [
					...cartProducts,
					{
						id: `${itemId + "-" + itemColor + "-" + itemSize}`,
						name: itemId,
						src: itemSrc,
						price: itemPrice,
						priceInNo: itemPriceInNo,
						color: itemColor,
						size: itemSize,
						quantity: 1
					}
				];
			}
			calculateTotal = updatedCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};

		case REMOVE_FROM_CART:
			const { removedItemId, removedItemSize, removedItemColor } = action;

			updatedCart = cartProducts.filter(item => {
				return !(
					item.color === removedItemColor &&
					item.size === removedItemSize &&
					item.name === removedItemId
				);
			});
			console.log(updatedCart);

			calculateTotal = updatedCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};
		case UP_QUANTITY:
			console.log("up");

			const { itemUpQuantity } = action;
			updatedCart = cartProducts.map(item => {
				if (item.name === itemUpQuantity) {
					return {
						...item,
						quantity: item.quantity + 1
					};
				}
				return item;
			});
			calculateTotal = updatedCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};
		case DOWN_QUANTITY:
			const { itemDownQuantity } = action;
			updatedCart = cartProducts.map(item => {
				if (item.name === itemDownQuantity && item.quantity > 1) {
					return {
						...item,
						quantity: item.quantity - 1
					};
				}
				return item;
			});
			calculateTotal = updatedCart.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return {
				...state,
				total: (calculateTotal =
					calculateTotal < 0 ? 0 : calculateTotal),
				cartProducts: updatedCart
			};
		default:
			return state;
	}
}

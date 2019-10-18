import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart-actions";
const defaultState = {
	total: 0,
	cartProducts: []
};
export default function cartReducer(state = defaultState, action) {
	const { cartProducts,total } = state;
	let updatedCart;
	switch (action.type) {
		case ADD_TO_CART:
			const { itemId, itemSrc, itemPrice } = action;
			
			
			const foundItem = cartProducts.find(item => item.id === itemId);
			if (foundItem) {
				// item has been added before
				updatedCart = cartProducts.map(item => {
					if (item.id === itemId) {
						return {
							...item,
							quantity: item.quantity + 1
						};
					}
					return item;
				});
			} else {
				updatedCart = [...cartProducts,
					{
						id: itemId,
						src: itemSrc,
						price:itemPrice,
						quantity: 1,
					}];
			}
			
			return { ...state, 
				total: total + 1,
				cartProducts: updatedCart
			 };

		case REMOVE_FROM_CART:
			const {removedItemId} = action;
			let quantityRemoved=0;
			updatedCart = cartProducts.map(item => {
				if (item.id === removedItemId) {
					quantityRemoved = item.quantity;
						return null;
						
				}
				return item;
			});
			let totalCount = state.total - quantityRemoved;
			if (totalCount < 0) totalCount = 0;
			return {
				...state,
				total: totalCount,
				cartProducts: updatedCart,
			};
		default:
			return state;
	}
}

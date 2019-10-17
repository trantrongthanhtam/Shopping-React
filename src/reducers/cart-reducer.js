import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart-actions";
const defaultState = {
	total: 0,
	product: []
};
export default function cartReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_TO_CART:
			// const { product } = action;
			// const { items } = state;
			// let updatedCart;
			// const cartProduct = items.find(item => item.id === product.id);
			// if (cartProduct) {
			// 	// item has been added before
			// 	updatedCart = items.map(item => {
			// 		if (item.id === cartProduct.id) {
			// 			return {
			// 				...item,
			// 				quantity: item.quantity + 1
			// 			};
			// 		}

			// 		return item;
			// 	});
			// } else {
			// 	// add new item
			// 	updatedCart = [
			// 		...items,
			// 		{
			// 			...product,
			// 			quantity: 1
			// 		}
			// 	];
			// }

			// const total = calculateTotal(updatedCart);

			return { ...state, total: state.total + 1 };

		case REMOVE_FROM_CART:
			let totalCount = state.total - 1;
			if (totalCount < 0) totalCount = 0;
			return {
				...state,
				total: totalCount
			};
		default:
			return state;
	}
}

// function calculateTotal(items) {
// 	return items.reduce((sum, item) => {
// 		return sum + (item.discountPrice || item.price);
// 	}, 0);
// }

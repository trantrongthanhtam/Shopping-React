import {
	FETCH_PRODUCTS,
	RECEIVE_PRODUCTS,
	FETCH_PRODUCTS_FAILED
} from "../actions/products-actions";

const initialState = {
	total: 0,
	items: []
};

export default function productsReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state };

		case RECEIVE_PRODUCTS: {
			const { items, total } = action.data;
			return {
				...state,
				items: items,
				total: total
			};
		}
		case FETCH_PRODUCTS_FAILED:
			return { ...state };
		default:
			return state;
	}
}

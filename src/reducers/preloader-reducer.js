import {
	RECEIVE_PRODUCTS,
	FETCH_PRODUCTS_FAILED
} from "../actions/products-actions";

const initialState = {
	visible: true
};

export default function preloaderReducer(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_PRODUCTS:
		case FETCH_PRODUCTS_FAILED: {
			const { visible } = action;
			return {
				...state,
				visible: visible
			};
		}

		default:
			return state;
	}
}

import { COLOR_FILTER } from "../actions/filter-actions";

const initialState = {
	colorFilter: "all"
};

export default function colorFilterReducer(state = initialState, action) {
	switch (action.type) {
		case COLOR_FILTER: {
			const { itemColorFilter } = action;
			return {
				...state,
				colorFilter: itemColorFilter
			};
		}

		default:
			return state;
	}
}

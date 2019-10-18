//action creator
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
export const FETCH_PRODUCTS_FAILED = "FETCH_PRODUCTS_FAILED";

export function fetchProducts() {
	return (dispatch, getstate) => {
		console.log("fetchProduct middleware");
		dispatch({ type: FETCH_PRODUCTS });
		fetch("/category.json")
			.then(res => res.json())
			.then(json => {
				console.log("json", json.status);
				
				dispatch({ type: RECEIVE_PRODUCTS, data: json });
			})
			.catch(error => {
				dispatch({ type: FETCH_PRODUCTS_FAILED, error });
			});
	};
}

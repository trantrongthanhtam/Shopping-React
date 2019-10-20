import { combineReducers } from "redux";
import cartReducer from "./cart-reducer";
import productsReducer from "./products-reducer";
import preloaderReducer from "./preloader-reducer";
import colorFilterReducer from "./color-filter-reducer";

const rootReducer = combineReducers({
	cartCount: cartReducer,
	products: productsReducer,
	preload: preloaderReducer,
	colorFilter: colorFilterReducer
});

export default rootReducer;

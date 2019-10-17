import { combineReducers } from "redux";
import cartReducer from "./cart-reducer";
import productsReducer from "./products-reducer";
import preloaderReducer from "./preloader-reducer";

const rootReducer = combineReducers({
	cartCount: cartReducer,
	products: productsReducer,
	preload: preloaderReducer
});

export default rootReducer;

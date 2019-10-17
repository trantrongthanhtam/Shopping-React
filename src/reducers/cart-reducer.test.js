import cartReducer from "./cart-reducer";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart-actions";

test("default state", () => {
	expect(cartReducer({ total: 0 }, { type: "" })).toBe({ total: 0 });
});
test("cart-reducer > ADD_TO_CART", () => {
	expect(cartReducer({ total: 0 }, { type: ADD_TO_CART })).toBe({ total: 1 });
});

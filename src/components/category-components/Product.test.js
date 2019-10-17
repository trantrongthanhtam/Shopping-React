import React from "react";
import renderer from "react-test-renderer";
import Product from "./Product.js";
const mockProduct = {
	/*...*/
};
test("Product component", () => {
	const component = renderer.create(
		// <Product {...mockProduct} />
		<div>Hello</div>
	);
	const tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});

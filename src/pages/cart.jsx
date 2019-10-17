import SimilarProducts from "../components/cart-components/SimilarProducts";
import CartInfo from "../components/cart-components/CartInfo";
import "../css/bootstrap.css";
import React, { Component } from "react";

export default class Cart extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<React.Fragment>
				<SimilarProducts />
				<CartInfo />
			</React.Fragment>
		);
	}
}

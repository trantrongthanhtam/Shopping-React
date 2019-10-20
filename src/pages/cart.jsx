import SimilarProducts from "../components/cart-components/SimilarProducts";
import CartInfo from "../components/cart-components/CartInfo";
import "../css/bootstrap.css";
import React, { Component } from "react";
import { fetchProducts } from "../actions/products-actions";
import { connect } from "react-redux";

class Cart extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.fetchProducts();
	}

	render() {
		return (
			<React.Fragment>
				<SimilarProducts products={this.props.products} />
				<CartInfo />
			</React.Fragment>
		);
	}
}

const mapStateToProps = ({ products }) => {
	return {
		products: products.items
	};
};
const mapDispatchToProps = { fetchProducts };
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);

import ProductDetail from "../components/detail-components/ProductDetail";
import MoreInfo from "../components/detail-components/MoreInfo";
import SimilarProducts from "../components/detail-components/SimilarProducts";
import Preloader from "../components/category-components/Preloader";
import { fetchProducts } from "../actions/products-actions";
import React, { Component } from "react";
import "../css/bootstrap.css";
import { connect } from "react-redux";

class Detail extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.props.fetchProducts();
	}

	render() {
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<Preloader />
				<ProductDetail url={id} products={this.props.products} />
				<MoreInfo url={id} />
				<SimilarProducts products={this.props.products} />
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
)(Detail);

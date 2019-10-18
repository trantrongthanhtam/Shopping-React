import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart-actions";
import { fetchProducts } from "../../actions/products-actions";
import styles from "../../css/category.module.css";

class ProductCategory extends React.Component {
	handleAddToCart = (id,src,price) => {
		this.props.addToCart(id,src,price);
	};
	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {
		const { products } = this.props;

		return (
			<div className={styles.productContent}>
				{products.map(product => (
					<Product
						key={product.id}
						{...product}
						onAddToCart={this.handleAddToCart}
					/>
				))}
			</div>
		);
	}
}

function mapStateToProps({ products }) {
	return {
		products: products.items
	};
}

const mapDispatchToProps = {
	addToCart,
	fetchProducts
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductCategory);

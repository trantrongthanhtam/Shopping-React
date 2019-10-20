import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart-actions";
import { fetchProducts } from "../../actions/products-actions";
import styles from "../../css/category.module.css";

class ProductCategory extends React.Component {
	handleAddToCart = (id, src, price, priceInNo) => {
		this.props.addToCart(id, src, price, priceInNo);
	};
	componentDidMount() {
		this.props.fetchProducts();
	}

	render() {
		const { products, colorFilter } = this.props;
		console.log(colorFilter);

		return (
			<div className={styles.productContent}>
				{products.map(product => {
					if (
						colorFilter === "all" ||
						product.colorFilter === colorFilter
					) {
						return (
							<Product
								key={product.id}
								{...product}
								onAddToCart={this.handleAddToCart}
							/>
						);
					} else return null;
				})}
			</div>
		);
	}
}

function mapStateToProps({ products, colorFilter }) {
	return {
		products: products.items,
		colorFilter: colorFilter.colorFilter
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

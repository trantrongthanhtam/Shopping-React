import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/category.module.css";

class Product extends React.Component {
	render() {
		const { src, id, price, onAddToCart } = this.props;
		return (
			<div className={styles.product}>
				<Link to="/detail">
					<div className={styles.hide}>
						<button
							onClick={onAddToCart.bind(id)}
							className={styles.addCart}
						>
							ADD TO CART
						</button>
						<img src={src} alt="product" />
					</div>
					<h3>{id}</h3>
					<p>{price}</p>
				</Link>
			</div>
		);
	}
}

export default Product;

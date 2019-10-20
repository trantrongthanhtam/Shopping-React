import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/cart.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class SimilarProducts extends React.Component {
	render() {
		const { products } = this.props;
		//shuffle(products);
		return (
			<div className={cx(styles.clearFix, styles.category)}>
				<p
					style={{
						marginTop: "40px",
						letterSpacing: "2.8px",
						fontSize: "14px",
						fontFamily: "utm-avo-bold",
						textAlign: "center",
						textTransform: "uppercase",
						width: "100%"
					}}
				>
					CÓ THỂ BẠN SẼ THÍCH
				</p>
				{products.map((product, index) => {
					if (index % 3 === 0) {
						return (
							<div className={cx(styles.product, styles.like)}>
								<Link to={`/detail/${product.url}`}>
									<div className={styles.hide}>
										<img
											alt="product"
											src={`/img/${product.src}.png`}
										/>
									</div>
									<h3>{product.id}</h3>
									<p>{product.price}</p>
								</Link>
							</div>
						);
					} else return null;
				})}
			</div>
		);
	}
}

function shuffle(array) {
	let ctr = array.length;
	let temp;
	let index;

	// While there are elements in the array
	while (ctr > 0) {
		// Pick a random index
		index = Math.floor(Math.random() * ctr);
		// Decrease ctr by 1
		ctr--;
		// And swap the last element with it
		temp = array[ctr];
		array[ctr] = array[index];
		array[index] = temp;
	}
	return array;
}
export default SimilarProducts;

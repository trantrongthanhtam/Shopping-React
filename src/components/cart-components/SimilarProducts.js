import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/cart.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class SimilarProducts extends React.Component {
	render() {
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
				<div className={cx(styles.product, styles.like)}>
					<Link to="/detail">
						<div className={styles.hide}>
							<img alt="product" src="img/product-1.png" />
						</div>
						<h3>Đầm SP911</h3>
						<p>349.000đ</p>
					</Link>
				</div>
				<div className={cx(styles.product, styles.like)}>
					<Link to="/detail">
						<div className={styles.hide}>
							<img alt="product" src="img/product-5.png" />
						</div>
						<h3>Đầm SP911</h3>
						<p>349.000đ</p>
					</Link>
				</div>
				<div className={cx(styles.product, styles.like)}>
					<Link to="/detail">
						<div className={styles.hide}>
							<img alt="product" src="img/product-3.png" />
						</div>
						<h3>Đầm SP911</h3>
						<p>349.000đ</p>
					</Link>
				</div>
				<div className={cx(styles.product, styles.like)}>
					<Link to="/detail">
						<div className={styles.hide}>
							<img alt="product" src="img/product-4.png" />
						</div>
						<h3>Đầm SP911</h3>
						<p>349.000đ</p>
					</Link>
				</div>
			</div>
		);
	}
}

export default SimilarProducts;

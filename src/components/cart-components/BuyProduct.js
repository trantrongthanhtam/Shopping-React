import React from "react";
import styles from "../../css/cart.module.css";
import classNames from "classnames";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cart-actions";

const cx = classNames.bind(styles);

class BuyProduct extends React.Component {
	handleReomveFromCart = e => {
		e.preventDefault();
		this.props.removeFromCart();
	};
	render() {
		return (
			<div className={cx(styles.buyProduct, "row")}>
				<div className={styles.buyImg}>
					<img src="./img/product-item.png" alt="Product" />
				</div>
				<div className={styles.buyInfo}>
					<div className={styles.buyInfoTitle}>Đầm Ôm A Hở Vai</div>
					<div className={styles.buyMoreInfo}>
						Giao trong 3-5 ngày làm việc
						<br />
						Không áp dụng được mã giảm giá
					</div>
				</div>
				<div className={styles.buySize}>S</div>
				<div className={styles.buyColor}>Đen</div>
				<div className={styles.buyQuantity}>
					<i className="fa fa-chevron-down" />  1  
					<i className="fa fa-chevron-up" />
				</div>
				<div className={styles.buyPrice}>1.150.000 VNĐ</div>
				<div className={styles.buyDelete}>
					<i
						style={{
							fontSize: "16px"
						}}
						className="fa"
						onClick={this.handleReomveFromCart}
					>
						
					</i>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	removeFromCart
};
export default connect(
	null,
	mapDispatchToProps
)(BuyProduct);

import React from "react";
import BuyProduct from "./BuyProduct";
import CartSummary from "./CartSummary";
import styles from "../../css/cart.module.css";
import classNames from "classnames";
import { connect } from "react-redux";
import { removeFromCart } from "../../actions/cart-actions";

const cx = classNames.bind(styles);

class CartInfo extends React.Component {
	handleRemoveFromCart = (id, color, size) => {
		this.props.removeFromCart(id, color, size);
	};
	render() {
		const { cartProducts } = this.props;
		return (
			<div className={styles.cart}>
				<div className={styles.cartTitle}>GIỎ HÀNG</div>
				<div className={styles.cartShow}>
					<div className={cx(styles.buyTitle, "row")}>
						<div className={styles.buyImg} />
						<div className={styles.buyInfo} />
						<div className={styles.buySize}>KÍCH CỠ</div>
						<div className={styles.buyColor}>MÀU SẮC</div>
						<div className={styles.buyQuantity}>SỐ LƯỢNG</div>
						<div className={styles.buyPrice}>GIÁ</div>
						<div className={styles.buyDelete} />
					</div>
					{cartProducts.map(item => (
						<BuyProduct
							key={item.id}
							{...item}
							onRemoveFromCart={this.handleRemoveFromCart}
						/>
					))}
				</div>
				<hr style={{ width: "100%", margin: "5px 0px -5px 0px" }}></hr>
				<CartSummary></CartSummary>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartProducts: state.cartCount.cartProducts
	};
};
const mapDispatchToProps = {
	removeFromCart
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartInfo);

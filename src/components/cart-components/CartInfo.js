import React from "react";
import BuyProduct from "./BuyProduct";
import CartSummary from "./CartSummary";
import styles from "../../css/cart.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class CartInfo extends React.Component {
	render() {
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
					<BuyProduct></BuyProduct>
				</div>
				<CartSummary></CartSummary>
			</div>
		);
	}
}

export default CartInfo;

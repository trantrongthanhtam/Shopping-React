import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/cart.module.css";
import { connect } from "react-redux";

class CartSumary extends React.Component {
	render() {
		const { cartProducts } = this.props;
		let sum = cartProducts.reduce(
			(acc, item) => acc + item.quantity * item.priceInNo,
			0
		);
		const numberWithDot = sum => {
			return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
		};
		return (
			<div className={styles.cartSum}>
				<div className={styles.pickmore}>
					<Link to="/category">
						<i className="fas fa-angle-left" /> CHỌN THÊM SẢN PHẨM
					</Link>
				</div>
				<div className={styles.voucherTitle}>NHẬP MÃ GIẢM GIÁ</div>
				<form action>
					<input type="text" name="voucher" id />
					<input type="submit" defaultValue="\xC1p d\u1EE5ng" />
				</form>
				<div className={styles.transFeeTitle}>PHÍ VẬN CHUYỂN</div>
				<div className={styles.transFeeContent}>Miễn phí</div>
				<div className={styles.sumupTitle}>TỔNG CỘNG</div>
				<div className={styles.sumupValue}>
					{numberWithDot(sum)}
					<b> VNĐ</b>
				</div>
				<div className={styles.checkout}>
					<a href="#footer">
						THANH TOÁN BẢO MẬT <i className="fas fa-angle-right" />{" "}
					</a>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		cartProducts: state.cartCount.cartProducts
	};
};
const mapDispatchToProps = {};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartSumary);

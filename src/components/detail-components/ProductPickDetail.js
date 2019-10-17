import React from "react";
import styles from "../../css/detail.module.css";
import classNames from "classnames";
import { addToCart } from "../../actions/cart-actions";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

class ProductPickDetail extends React.Component {
	handleAddToCart = e => {
		e.preventDefault();
		this.props.addToCart();
	};
	render() {
		return (
			<div className={cx(styles.productPickup, "col-md-3")}>
				<ul className={cx("row", styles.row)}>
					<li className="col-3 col-md-12 order-md-1">
						<div className={styles.pickMenu}>
							<div>MÀU SẮC</div>
						</div>
						<ul className={styles.color}>
							<li> </li>
							<li> </li>
						</ul>
					</li>
					<li className="col-6 col-md-12 order-md-2">
						<div className={styles.pickMenu}>
							<div>KÍCH CỠ</div>
						</div>
						<ul className={styles.sizing}>
							<li>XS</li>
							<li>S</li>
							<li>M</li>
							<li>L</li>
						</ul>
						<div className={styles.notify}>
							Có sẵn tất cả kích cỡ. Sắp hết hàng
						</div>
					</li>
					<button
						className="order-4 order-md-3"
						onClick={this.handleAddToCart}
					>
						Cho vào giỏ hàng
					</button>
					<li className="col-3 col-md-12 order-3 order-md-4">
						<div className={styles.pickMenu}>
							<div>CHIA SẺ</div>
						</div>
						<ul className={styles.social}>
							<li>
								<a href="#footer">
									<i className="fab fa-facebook-f" />
								</a>
							</li>
							<li />
						</ul>
					</li>
				</ul>
				<div className={styles.question}>
					<h3>BẠN CÓ THẮC MẮC?</h3>
					<p>
						Hãy truy cập trang <a href="#footer">HỎI ĐÁP</a>
						<br />
						<u>Thời gian làm việc:</u>
						<br />
						Điện thoại: 8:00 - 18:00
						<br />
						(Thứ 2 đến CN)
						<br />
						Ngày Lễ: 9:00 - 18:00
					</p>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = {
	addToCart
};

export default connect(
	null,
	mapDispatchToProps
)(ProductPickDetail);

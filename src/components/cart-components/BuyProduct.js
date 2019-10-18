import React from "react";
import styles from "../../css/cart.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class BuyProduct extends React.Component {
	render() {
		const {id, src, price, quantity, onRemoveFromCart} = this.props;
		return (
			<div className={cx(styles.buyProduct, "row")}>
				<div className={styles.buyImg}>
					<img src={src} width='60px' height='70px' alt="Product" />
				</div>
				<div className={styles.buyInfo}>
					<div className={styles.buyInfoTitle}>{id}</div>
					<div className={styles.buyMoreInfo}>
						Giao trong 3-5 ngày làm việc
						<br />
						Không áp dụng được mã giảm giá
					</div>
				</div>
				<div className={styles.buySize}>S</div>
				<div className={styles.buyColor}>Đen</div>
				<div className={styles.buyQuantity}>
					<i className="fa fa-chevron-down" />  {quantity}  
					<i className="fa fa-chevron-up" />
				</div>
				<div className={styles.buyPrice}>{price}</div>
				<div className={styles.buyDelete}>
					<i
						style={{
							fontSize: "16px"
						}}
						className="fa" onClick={()=> onRemoveFromCart(id)}
					>
						
					</i>
				</div>
			</div>
		);
	}
}

export default BuyProduct;

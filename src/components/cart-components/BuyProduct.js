import React from "react";
import styles from "../../css/cart.module.css";
import classNames from "classnames";
import { connect } from "react-redux";
import { upQuantity, downQuantity } from "../../actions/cart-actions";

const cx = classNames.bind(styles);

class BuyProduct extends React.Component {
	render() {
		const {
			id,
			src,
			price,
			quantity,
			size,
			color,
			onRemoveFromCart,
			upQuantity,
			downQuantity
		} = this.props;
		return (
			<div className={cx(styles.buyProduct, "row")}>
				<div className={styles.buyImg}>
					<img
						src={`/img/${src}.png`}
						width="80px"
						height="100px"
						alt="Product"
					/>
				</div>
				<div className={styles.buyInfo}>
					<div className={styles.buyInfoTitle}>{id}</div>
					<div className={styles.buyMoreInfo}>
						Giao trong 3-5 ngày làm việc
						<br />
						Không áp dụng được mã giảm giá
					</div>
				</div>
				<div className={styles.buySize}>{size}</div>
				<div className={styles.buyColor}>{color}</div>
				<div className={styles.buyQuantity}>
					<i
						className="fa fa-chevron-down"
						style={{ cursor: "pointer" }}
						onClick={() => downQuantity(id)}
					/>
					  {quantity}  
					<i
						className="fa fa-chevron-up"
						style={{ cursor: "pointer" }}
						onClick={() => upQuantity(id)}
					/>
				</div>
				<div className={styles.buyPrice}>{price}</div>
				<div className={styles.buyDelete}>
					<i
						style={{
							fontSize: "16px"
						}}
						className="fa"
						onClick={() => onRemoveFromCart(id)}
					>
						
					</i>
				</div>
			</div>
		);
	}
}
const mapDispatchToProps = {
	upQuantity,
	downQuantity
};
export default connect(
	null,
	mapDispatchToProps
)(BuyProduct);

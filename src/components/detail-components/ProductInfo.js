import React from "react";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ProductInfo extends React.Component {
	render() {
		const { id, price } = this.props;
		return (
			<div className={cx(styles.productInfo, "col-md-4")}>
				<div className={styles.productTitle}>
					<h3>{id}</h3>
					<p>{price}</p>
				</div>
				<p>
					Bạn đã có chiếc đầm hở vai đang làm mưa gió trong mùa hè thu
					năm nay chưa. Hãy sắm ngay 1 chiếc từ thương hiệu De Leah
					với 2 mầu đen tuyền và hồng thạch anh siêu hot này nhé:
					<br />- Đầm ôm 2 lớp (có lót trong)
					<br />- Đầm khoá kéo lưng
					<br />- Cổ V rộng
				</p>
				<div className={styles.free}>
					<div className={styles.subfree}>
						<div className={styles.subfreeTitle}>
							Miễn phí giao hàng từ 449.000 đ
						</div>
						<div className={styles.subfreeHighlight}>MIỄN PHÍ</div>
					</div>
					<div className={styles.subfree}>
						<div className={styles.subfreeTitle}>
							30 NGÀY ĐỔI TRẢ (*)
						</div>
						<div className={styles.subfreeHighlight}>MIỄN PHÍ</div>
					</div>
					<div className={styles.subfree}>
						<div className={styles.subfreeTitle}>
							Thanh toán khi nhận hàng
						</div>
						<div className={styles.subfreeHighlight}>MIỄN PHÍ</div>
					</div>
				</div>
				<p>
					SẼ CÓ TẠI NHÀ BẠN
					<br />
					trong 3-5 ngày làm việc
				</p>
			</div>
		);
	}
}

export default ProductInfo;

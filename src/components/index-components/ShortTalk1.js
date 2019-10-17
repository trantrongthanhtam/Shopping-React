import React from "react";
import styles from "../../css/index.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ShortTalk1 extends React.Component {
	render() {
		return (
			<div className={cx(styles.clearFix, styles.shortTalk)}>
				<img
					className={styles.column}
					src="./img/15032329-1168863649873334-62025183422366073-n.png"
					alt=""
				/>
				<div className={cx(styles.column, styles.column3)}>
					<p>
						BẠN ĐANG TÌM NHỮNG MẪU THỜI TRANG, QUẦN ÁO, GIÀY DÉP VÀ{" "}
						<br />
						PHỤ KIỆN MỚI NHẤT TRÊN MẠNG? <br /> HÃY MUA SẮM NGAY HÔM
						NAY TẠI honganstore
					</p>
					<p>
						<b>honganstore</b> sẽ mang lại cho khách hàng những trải
						nghiệm mua sắm thời trang trực tuyến thú vị từ các
						thương hiệu thời trang quốc tế và trong nước danh tiếng.
						Thời trang <b>honganstore</b> luôn đổi mới từng ngày với
						những bộ sưu tập thời trang nam nữ khổng lồ từ giày dép,
						trang phục, phụ kiện đến mỹ phẩm cho cả nam, nữ.
					</p>
				</div>
			</div>
		);
	}
}

export default ShortTalk1;

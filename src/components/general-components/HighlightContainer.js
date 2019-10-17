import React from "react";
import styles from "../../css/general.module.css";

class HighlightContainer extends React.Component {
	render() {
		return (
			<div className={styles.highlightContainer}>
				<div className={styles.highlight}>
					<div>
						<img
							className={styles.iconHighlight}
							src="./img/layer-1.png"
							alt=""
						/>
						<div className={styles.info}>
							<p>Giao hàng miễn phí</p>
							<p className={styles.subInfo}>
								Trên 3SP - Áp dụng cho TPHCM
							</p>
						</div>
					</div>
					<div>
						<img
							className={styles.iconHighlight}
							src="./img/layer-2.png"
							alt=""
						/>
						<div className={styles.info}>
							<p>Giao hàng online toàn quốc</p>
							<p className={styles.subInfo}>
								COD chỉ áp dụng cho TPHCM
							</p>
						</div>
					</div>
					<div>
						<img
							className={styles.iconHighlight}
							src="./img/layer-3.png"
							alt=""
						/>
						<div className={styles.info}>
							<p>Sản phẩm đổi miễn phí</p>
							<p className={styles.subInfo}>
								Đổi sản phẩm trong vòng 5 ngày
							</p>
						</div>
					</div>
					<div>
						<img
							className={styles.iconHighlight}
							src="./img/layer-4.png"
							alt=""
						/>
						<div className={styles.info}>
							<p>Hình ảnh chụp độc quyền</p>
							<p className={styles.subInfo}>
								Chất liệu mẫu mã như hình 100%
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HighlightContainer;

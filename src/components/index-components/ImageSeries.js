import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/index.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ImageSeries extends React.Component {
	render() {
		return (
			<div className={styles.imageSeries}>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText1)}
						>
							<p>TRANG PHỤC</p>
							<p>HỌA TIẾT</p>
						</div>
						<img src="./img/img-1194-copy-131.png" alt="" />
					</Link>
				</div>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText2)}
						>
							<p>CÔ NÀNG</p>
							<p>NỮ TÍNH</p>
						</div>
						<img src="./img/img-9170-copy-4768.png" alt="" />
					</Link>
				</div>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText3)}
						>
							<p>PHONG CÁCH</p>
							<p>KHỎE KHOẮN</p>
						</div>
						<img src="./img/img-8240-copy-copy-2111.png" alt="" />
					</Link>
				</div>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText4)}
						>
							<p>PHONG CÁCH</p>
							<p>BOHEMIAN</p>
						</div>
						<img src="./img/img-0513-copy-931.png" alt="" />
					</Link>
				</div>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText5)}
						>
							<p>THỜI TRANG</p>
							<p>TỐI GIẢN</p>
						</div>
						<img src="./img/mg-0359-8040.png" alt="" />
					</Link>
				</div>
				<div className={styles.imgContainer}>
					<Link to="/category">
						<div
							className={cx(styles.overlay, styles.overlayText6)}
						>
							<p>THỜI TRANG</p>
							<p>CÔNG SỞ</p>
						</div>
						<img src="./img/img-9477-copy-6272.png" alt="" />
					</Link>
				</div>
			</div>
		);
	}
}

export default ImageSeries;

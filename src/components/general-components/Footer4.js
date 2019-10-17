import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Footer4 extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.footer4,
					"col-lg-3",
					"col-md-6",
					"col-sm-4"
				)}
			>
				<p>HỆ THỐNG BẢO MẬT</p>
				<ul className={styles.baoMat}>
					<li>Chuẩn bảo mật PCI</li>
					<li>Bảo vệ chủ thẻ</li>
					<li>Mạng mã hoá</li>
				</ul>
			</div>
		);
	}
}

export default Footer4;

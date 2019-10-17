import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Box3 extends React.Component {
	render() {
		return (
			<div
				className={cx(styles.box, styles.box3, "col-sm-3", "col-md-4")}
			>
				<h4>HỖ TRỢ KHÁCH HÀNG</h4>
				<ul>
					<li>
						<a href="#footer">Hỏi Đáp</a>
					</li>
					<li>
						<a href="#footer">Liên Hệ</a>
					</li>
					<li>
						<a href="#footer">Biểu Phí Giao Hàng</a>
					</li>
					<li>
						<a href="#footer">Danh Mục Sản Phẩm</a>
					</li>
					<li>
						<a href="#footer">Thẻ quà tặng</a>
					</li>
					<li>
						<a href="#footer">Kiểm Tra Đơn Hàng</a>
					</li>
					<li>
						<a href="#footer">Điều Kiện & Điều Khoản</a>
					</li>
					<li>
						<a href="#footer">Chính Sách Bảo Mật</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Box3;

import React from "react";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class MoreInfoTab4 extends React.Component {
	render() {
		return (
			<div
				id="chinhsachhoantra"
				className={cx("container", styles.tabPane, "fade")}
			>
				<ul>
					<li>SKU (SIMPLE) - 4</li>
					<li>DE186AA27MAYVN</li>
				</ul>
				<ul>
					<li>HƯỚNG DẪN SỬ DỤNG</li>
					<li>
						- Lột mặt trái sản phẩm khi giặt, phơi
						<br />- Nên giặt tay
						<br />- Không sử dụng thuốc tẩy
					</li>
				</ul>
				<ul>
					<li>THÀNH PHẦN CHẤT LIỆU</li>
					<li>Polyester</li>
				</ul>
				<ul>
					<li>XUẤT XỨ</li>
					<li>Việt Nam</li>
				</ul>
				<ul>
					<li>SẢN PHẨM KHÔNG GIẢM GIÁ</li>
					<li>
						Sản phẩm này không được áp dụng với voucher hoặc các
						khuyến mại khác.
					</li>
				</ul>
			</div>
		);
	}
}

export default MoreInfoTab4;

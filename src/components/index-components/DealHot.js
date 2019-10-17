import React from "react";
import styles from "../../css/index.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class DealHot extends React.Component {
	render() {
		return (
			<div className="dealhot">
				<p
					style={{
						letterSpacing: "2.8px",
						fontSize: "14px",
						fontFamily: "utm-avo-bold",
						textAlign: "center",
						textTransform: "uppercase"
					}}
				>
					Đừng Bỏ Lỡ - Deal Hot Trong Ngày
				</p>
				<div
					className={cx(styles.clearFix, styles.flexContainer)}
					style={{
						height: "443px"
					}}
				>
					<div className={cx(styles.column2, styles.box4)}>
						<p>GIẢM 20%</p>
						<p>CÁC SẢN PHẨM ÁO</p>
						<p>ĐẾN HẾT 20/12</p>
					</div>
					<div className={cx(styles.column2, styles.box5)}>
						<div className={cx(styles.container)}>
							<p>18/12 - 26/12</p>
							<p> MERRY XMAS</p>
							<p>ĐỒNG GIÁ </p>
							<p />
							<p>199K - 299K - 499K</p>
							<p />
						</div>
					</div>
					<div className={cx(styles.column2, styles.box6)}>
						<p>SỞ HỮU NGAY</p>
						<p>
							DREAMCATCHER <br /> SIÊU ĐẸP
						</p>
						<p>cho đơn hàng trên 2 triệu</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DealHot;

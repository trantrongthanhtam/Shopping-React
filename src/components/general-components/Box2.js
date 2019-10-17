import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Box2 extends React.Component {
	render() {
		return (
			<div
				className={cx(styles.box, styles.box2, "col-sm-6", "col-md-4")}
			>
				<div className={styles.container}>
					<h4>BẠN LÀ KHÁCH HÀNG MỚI?</h4>
					<p>NHẬN NGAY VOUCHER TRỊ GIÁ </p>
					<p
						style={{
							margin: "5px",
							fontSize: "24px",
							fontFamily: "utm-avo-bold"
						}}
					>
						120.000 VNĐ
					</p>
					<p>
						NHẬN NGAY NHỮNG ƯU ĐÃI HẤP DẪN <br /> VÀ CÁC XU HƯỚNG
						MỚI NHẤT
					</p>
					<input type="text" name="email" placeholder="Email" />
					<br />
					<button>Đăng ký</button>
				</div>
			</div>
		);
	}
}

export default Box2;

import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);
class Box1 extends React.Component {
	render() {
		return (
			<div
				className={cx(styles.box, styles.box1, "col-sm-3", "col-md-4")}
			>
				<h4
					style={{
						marginBottom: "0px"
					}}
				>
					HỆ THỐNG CỬA HÀNG HONGAN.STORE
				</h4>
				<p>(09:00 A.M - 10:00 P.M)</p>
				<div className={styles.store}>
					<h5>Store 1</h5>
					<p>
						88 Quang Trung, P.10, Gò Vấp <br />
						08.6275.3304
					</p>
				</div>
				<div className={styles.store}>
					<h5>Store 2</h5>
					<p>
						1009B CMT8, P.7, Q.Tân Bình
						<br />
						08.6268.0602
					</p>
				</div>
				<div className={styles.store}>
					<h5>Store 3</h5>
					<p>
						208 Quang Trung, P.10, Gò Vấp
						<br />
						08.6274.5304
					</p>
				</div>
			</div>
		);
	}
}

export default Box1;

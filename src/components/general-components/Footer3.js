import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Footer3 extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.footer3,
					"col-lg-3",
					"col-md-6",
					"col-sm-4"
				)}
			>
				<p>ĐƯỢC CHỨNG NHẬN</p>
				<img src="/img/dathongbao.png" alt="" />
				<img src="/img/tin-dung-02-01.png" alt="" />
			</div>
		);
	}
}

export default Footer3;

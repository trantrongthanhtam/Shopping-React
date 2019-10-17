import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Footer2 extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.footer2,
					"col-lg-4",
					"col-md-6",
					"col-sm-4"
				)}
			>
				<p>DỊCH VỤ VẬN CHUYỂN</p>
				<img
					src="./img/dd-698324-ade-3-b-5611-a-81-d-8-abb-9-c-40286.png"
					alt=""
				/>
				<img src="./img/rvst-zjw-1404786181.png" alt="" />
				<img src="./img/22040.png" alt="" />
			</div>
		);
	}
}

export default Footer2;

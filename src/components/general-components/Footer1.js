import React from "react";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Footer1 extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.footer1,
					"col-lg-2",
					"col-md-6",
					"col-sm-4"
				)}
			>
				<p>THANH TOÁN</p>
				<img
					src="/img/1478871491-payment-method-master-card.png"
					alt="master card"
				/>
				<img
					src="/img/1478871544-payment-method-card-visa.png"
					alt="visa card"
				/>
				<img
					src="/img/1478872070-dollar-bills-cut.png"
					alt="Dollar bills"
				/>
			</div>
		);
	}
}

export default Footer1;

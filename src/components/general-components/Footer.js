import React from "react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Footer extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.clearFix,
					styles.footer,
					"row",
					styles.row
				)}
			>
				<Footer1></Footer1>
				<Footer2></Footer2>
				<Footer3></Footer3>
				<Footer4></Footer4>
				<div className={styles.line} />
				<p className={styles.copyright}>© 2016 honganstore</p>
			</div>
		);
	}
}

export default Footer;

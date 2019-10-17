import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class SizeCategory extends React.Component {
	render() {
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no3"
				>
					<div>KÍCH CỠ</div>
					<div>
						<i className="fas fa-angle-right" />
					</div>
				</div>
				<ul className={cx(styles.sizing, "collapse")} id="no3">
					<li>XS</li>
					<li>S</li>
					<li>M</li>
					<li>L</li>
				</ul>
			</li>
		);
	}
}

export default SizeCategory;

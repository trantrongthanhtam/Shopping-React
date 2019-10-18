import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class SizeCategory extends React.Component {
	state = {
		cssUpdate: ["fa-angle-right", "collapse"]
	};
	handleExpandMenu = () => {
		let update =
			this.state.cssUpdate[0] === "fa-angle-right"
				? ["fa-angle-down", ""]
				: ["fa-angle-right", "collapse"];
		this.setState({ cssUpdate: update });
	};
	render() {
		const { cssUpdate } = this.state;
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no3"
					onClick={this.handleExpandMenu}
				>
					<div>KÍCH CỠ</div>
					<div>
						<i className={`fas ${cssUpdate[0]}`} />
					</div>
				</div>
				<ul className={cx(styles.sizing, cssUpdate[1])} id="no3">
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

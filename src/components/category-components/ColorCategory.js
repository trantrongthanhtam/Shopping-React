import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ColorCategory extends React.Component {
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
					data-target="#no5"
					onClick={this.handleExpandMenu}
				>
					<div>MÀU SẮC</div>
					<div>
						<i className={`fas ${cssUpdate[0]}`} />
					</div>
				</div>
				<ul className={cx(styles.subMenu, cssUpdate[1])} id="no5">
					<li>
						<a href="#footer">Be</a>
					</li>
					<li>
						<a href="#footer">Bạc</a>
					</li>
					<li>
						<a href="#footer">Cam</a>
					</li>
					<li>
						<a href="#footer">Hồng</a>
					</li>
					<li>
						<a href="#footer">Nhiều màu</a>
					</li>
					<li>
						<a href="#footer">Nâu</a>
					</li>
					<li>
						<a href="#footer">Trắng</a>
					</li>
				</ul>
			</li>
		);
	}
}

export default ColorCategory;

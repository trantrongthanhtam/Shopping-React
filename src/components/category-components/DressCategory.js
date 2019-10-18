import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class DressCategory extends React.Component {
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
			<li className="col-sm-4 col-md-12 ">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no1"
					onClick={this.handleExpandMenu}
				>
					<div>ĐẦM</div>
					<div>
						<i className={`fas ${cssUpdate[0]}`} />
					</div>
				</div>
				<ul className={cx(styles.subMenu, cssUpdate[1])} id="no1">
					<li>
						<a href="#footer">Đầm Dạo Phố</a>
					</li>
					<li>
						<a href="#footer">Đầm Công Sở</a>
					</li>
					<li>
						<a href="#footer">Đầm Dự Tiệc</a>
					</li>
					<li>
						<a href="#footer">Đầm Maxi</a>
					</li>
					<li>
						<a href="#footer">Đầm Dáng Ôm</a>
					</li>
					<li>
						<a href="#footer">Đầm Dáng Xòe</a>
					</li>
					<li>
						<a href="#footer">Đầm Dáng Suông</a>
					</li>
				</ul>
			</li>
		);
	}
}

export default DressCategory;

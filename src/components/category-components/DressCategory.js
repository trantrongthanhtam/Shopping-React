import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class DressCategory extends React.Component {
	render() {
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no1"
				>
					<div>ĐẦM</div>
					<div>
						<i className="fas fa-angle-right" />
					</div>
				</div>
				<ul className={cx(styles.subMenu, "collapse")} id="no1">
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

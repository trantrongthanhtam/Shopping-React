import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ColorCategory extends React.Component {
	render() {
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no5"
				>
					<div>MÀU SẮC</div>
					<div>
						<i className="fas fa-angle-right" />
					</div>
				</div>
				<ul className={cx(styles.subMenu, "collapse")} id="no5">
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

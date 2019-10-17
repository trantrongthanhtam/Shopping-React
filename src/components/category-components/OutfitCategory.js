import React from "react";
import styles from "../../css/category.module.css";

class OutfitCategory extends React.Component {
	render() {
		return (
			<li className="col-sm-4 col-md-12">
				<div className={styles.topMenu}>
					<div>TRANG PHỤC NỮ</div>
					<div>
						<i className="fas fa-angle-right" />
					</div>
				</div>
			</li>
		);
	}
}

export default OutfitCategory;

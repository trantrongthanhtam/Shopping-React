import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class PriceCategory extends React.Component {
	render() {
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#rangeprice"
				>
					<div>GIÁ</div>
					<div>
						<i className="fas fa-angle-right" />
					</div>
				</div>
				<div
					id="rangeprice"
					className={cx("row", styles.row, "collapse")}
				>
					<div className="col-12 d-flex flex-row justify-content-between p-0 my-2">
						<span>109.000</span>
						<span>4.020.000</span>
					</div>
					<input
						type="range"
						name="price"
						id="no4"
						min={100000}
						max={10000000}
					/>
					<span className="col-12 d-flex justify-content-center mt-3">
						105 sản phẩm
					</span>
				</div>
			</li>
		);
	}
}

export default PriceCategory;

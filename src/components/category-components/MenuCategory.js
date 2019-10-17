import React from "react";
import DressCategory from "./DressCategory";
import OutfitCategory from "./OutfitCategory";
import SizeCategory from "./SizeCategory";
import PriceCategory from "./PriceCategory";
import ColorCategory from "./ColorCategory";
import AdCategory from "./AdCategory";
import MainCategory from "./MainCategory";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class MenuCategory extends React.Component {
	render() {
		return (
			<div
				className={cx(
					"row",
					styles.clearFix,
					styles.category,
					styles.row
				)}
			>
				<div className={cx(styles.column, styles.menu, "col-md-3")}>
					<ul className={cx("row", styles.row)}>
						<DressCategory></DressCategory>
						<OutfitCategory></OutfitCategory>
						<SizeCategory></SizeCategory>
						<PriceCategory></PriceCategory>
						<ColorCategory></ColorCategory>
					</ul>
					<AdCategory></AdCategory>
				</div>
				<MainCategory></MainCategory>
			</div>
		);
	}
}

export default MenuCategory;

import React from "react";
import ProductCategory from "./ProductCategory";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class MainCategory extends React.Component {
	render() {
		return (
			<div className={cx("column", styles.content, "col-md-9")}>
				<div className={cx(styles.pages1, styles.pages)}>
					<div>
						<p>
							SẮP XẾP THEO <i className="fas fa-angle-right" />
						</p>
					</div>
					<div>
						<p />
						<p>1</p>
						<p>2</p>
						<p> 3</p>
						<p>4</p>
						<p>...</p>
						<p>21</p>
						<p />
					</div>
				</div>
				<ProductCategory></ProductCategory>
				<div className={cx(styles.pages2, styles.pages)}>
					<div>
						<p />
						<p>1</p>
						<p>2</p>
						<p> 3</p>
						<p>4</p>
						<p>...</p>
						<p>21</p>
						<p />
					</div>
				</div>
			</div>
		);
	}
}

export default MainCategory;

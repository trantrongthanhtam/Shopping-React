import React from "react";
import ProductInfo from "./ProductInfo";
import ImgShow from "./ImgShow";
import ProductPickDetail from "./ProductPickDetail";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ProductDetail extends React.Component {
	render() {
		return (
			<div className={cx(styles.productDetail, "row")}>
				<ProductInfo></ProductInfo>
				<ImgShow></ImgShow>
				<ProductPickDetail></ProductPickDetail>
			</div>
		);
	}
}

export default ProductDetail;

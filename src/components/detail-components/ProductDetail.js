import React from "react";

import ProductInfo from "./ProductInfo";
import ImgShow from "./ImgShow";
import ProductPickDetail from "./ProductPickDetail";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ProductDetail extends React.Component {
	render() {
		const { url, products } = this.props;
		const product = products.find(item => item.url === url);

		return (
			<div className={cx(styles.productDetail, "row")}>
				<ProductInfo {...product} />
				<ImgShow {...product} />
				<ProductPickDetail {...product} />
			</div>
		);
	}
}

export default ProductDetail;

import React from "react";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ImgShow extends React.Component {
	render() {
		return (
			<div className={cx(styles.imgShow, "col-md-5")}>
				<div className={styles.mainImg}>
					<img alt="product" src="./img/main-img@2x.png" />
				</div>
				<div className={styles.subImgSeries}>
					<img alt="product" src="./img/sub-img-1@2x.png" />
					<img alt="product" src="./img/sub-img-2@2x.png" />
					<img alt="product" src="./img/sub-img-3@2x.png" />
					<img alt="product" src="./img/sub-img-4@2x.png" />
				</div>
			</div>
		);
	}
}

export default ImgShow;

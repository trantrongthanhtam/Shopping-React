import React from "react";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ImgShow extends React.Component {
	render() {
		const { src } = this.props;
		return (
			<div className={cx(styles.imgShow, "col-md-5")}>
				<div className={styles.mainImg}>
					<img alt="product" src={`/img/${src}@3x.png`} />
				</div>
				<div className={styles.subImgSeries}>
					<img alt="product" src={`/img/${src}.png`} />
					<img alt="product" src={`/img/${src}.png`} />
					<img alt="product" src={`/img/${src}.png`} />
					<img alt="product" src={`/img/${src}.png`} />
				</div>
			</div>
		);
	}
}

export default ImgShow;

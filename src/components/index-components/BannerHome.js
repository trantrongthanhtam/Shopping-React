import React from "react";
import styles from "../../css/index.module.css";

class BannerHome extends React.Component {
	render() {
		return (
			<div className={styles.bannerHome}>
				<div>
					<p className={styles.bannerSubTxt}>
						{this.props.id} Thời gian có hạn
					</p>
					<h1>
						Crazy sale <br /> giảm đến 70%
					</h1>
					<p>Sở hữu ngay những sản phẩm với mức giá trong mơ!</p>
					<a href="#footer">Tìm hiểu thêm</a>
					<p>*Sản phẩm trong chương trình không được hoàn trả.</p>
				</div>
			</div>
		);
	}
}

export default BannerHome;

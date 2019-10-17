import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ShortTalk4 extends React.Component {
	render() {
		return (
			<div
				className={cx(
					styles.clearFix,
					styles.shortTalk,
					styles.reverse
				)}
				style={{
					marginBottom: "60px"
				}}
			>
				<div className={cx(styles.column, styles.column3)}>
					<p>CHỌN LỰA ÁO ĐẦM ĐẸP CHO TỪNG PHONG CÁCH</p>
					<p>
						Tùy vào từng sở thích và phong cách mà bạn sẽ có được
						cho mình các kiểu áo đầm nữ khác nhau. Chẳng hạn như đầm
						đẹp kiểu Hàn Quốc giá rẻ với giá cả phải chăng và thiết
						kế trẻ trung, đáng yêu phù hợp cho hầu hết mọi cô gái.
						Hoặc bạn có thể mua đầm đẹp với thiết kế đầm váy thời
						trang gợi cảm hoặc đầm hàng hiệu để diện khi đi tiệc
						hoặc sự kiện quan trọng. Ngoài ra, các kiểu đầm thời
						trang khác như đầm nữ dễ thương, đầm nữ nữ tính cũng
						được yêu thích không kém. Các cô gái có cá tính mạnh,
						thích sự phá cách có thể chọn cho mình kiểu đầm nữ thời
						trang với chất liệu thun, suông đơn giản nhưng vẫn không
						kém phần nổi bật và độc đáo.
					</p>
				</div>
				<img
					className={cx(styles.column)}
					style={{
						float: "right"
					}}
					src="./img/chon-lua.png"
					alt="short talk 4"
				/>
			</div>
		);
	}
}

export default ShortTalk4;

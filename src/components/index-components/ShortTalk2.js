import React from "react";
import styles from "../../css/index.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ShortTalk2 extends React.Component {
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
					<p>THỜI TRANG 2016 HOT NHẤT TẠI honganstore</p>
					<p>
						Mua sắm thời trang là nhu cầu thiết yếu của cả phái mạnh
						và phái đẹp. Thấu hiểu điều này, honganstore sẽ mang đến
						cho bạn nhiều bộ sưu tập{" "}
						<strong>thời trang 2016</strong> hot nhất từ các thương
						hiệu trong và ngoài nước. Bên cạnh đó,{" "}
						<strong>thời trang cao cấp Hàn Quốc</strong> từ các nhãn
						hàng nổi tiếng cũng là một thế mạnh của trang web mua
						sắm thời trang hàng đầu này. Ngoài ra, honganstore cũng
						sẽ gợi ý cho bạn những món quà thật ý nghĩa để tặng
						người thân, bạn bè. Chúng tôi sẽ làm bạn hài lòng với sự
						lựa chọn của mình bằng giá tốt nhất và chất lượng dịch
						vụ hoàn hảo.{" "}
					</p>
				</div>
				<img
					className={styles.column}
					style={{
						float: "right"
					}}
					src="./img/14732384-1155643027862063-7098906137782434599-n.png"
					alt=""
				/>
			</div>
		);
	}
}

export default ShortTalk2;

import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ShortTalk3 extends React.Component {
	render() {
		return (
			<div className={cx(styles.clearFix, styles.shortTalk)}>
				<img
					className={styles.column}
					src="./img/tu-tin.png"
					alt="short talk3"
				/>
				<div className={cx(styles.column, styles.column3)}>
					<p>TỰ TIN TỎA SÁNG CÙNG NHỮNG KIỂU ĐẦM ĐẸP</p>
					<p>
						Trong tủ đồ của mọi cô gái, thứ trang phục không thể
						thiếu chính là những chiếc đầm đẹp và thời trang. Một
						chiếc áo đầm đẹp sẽ giúp cho bạn có được một vẻ ngoài nữ
						tính và nổi bật. Đầm là trang phục dễ mặc, bạn có thể
						diện các kiểu đầm đẹp khi đi đến công sở hay họp mặt gia
						đình mà vẫn trông thật thanh lịch và chỉn chu. Bên cạnh
						đó, đầm váy đẹp cũng được xem là lựa chọn hàng đầu của
						phái nữ khi ra ngoài hẹn hò lãng mạn cùng người yêu hoặc
						đi chơi cùng bạn bè. Khi chọn mặc những chiếc đầm xinh
						này, bạn đừng quên phối cùng những đôi giày thời trang
						hay túi xách nữ để trông đáng yêu và nổi bật hơn khi ra
						phố nhé. Ngoài ra, chiếc váy đầm thời trang của bạn sẽ
						trở nên bắt mắt hơn khi được điểm xuyết bằng vài món phụ
						kiện thời trang.
					</p>
				</div>
			</div>
		);
	}
}

export default ShortTalk3;

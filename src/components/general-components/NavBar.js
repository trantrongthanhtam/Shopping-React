import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/general.module.css";
import classNames from "classnames";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

class NavBar extends React.Component {
	render() {
		return (
			<nav className={cx(styles.nav, styles.clearFix)}>
				<ul className={styles.row}>
					<li>
						<Link to="/">Trang chủ</Link>
					</li>
					<li>
						<Link to="/category#top">Tạp chí</Link>
					</li>
					<li>
						<Link to="/category">Theo dõi đơn hàng</Link>
					</li>
					<li>
						<Link to="/category">Đăng nhập</Link>
					</li>
					<li>
						<Link to="/category">Đăng ký</Link>
					</li>
					<li>
						<Link to="/category">Trợ giúp</Link>
					</li>
				</ul>
				<div className={cx(styles.icon, "row")}>
					<Link to="/category">
						<i className="fas fa-search" />
					</Link>
					<Link to="/category">
						<i className="fab fa-facebook-f" />
					</Link>
					<Link to="/cart">
						<i className="fas fa-shopping-cart" />
						<span className={styles.cartCount}>
							{this.props.cartCount.total}
						</span>
					</Link>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		cartCount: state.cartCount
	};
}
export default connect(
	mapStateToProps,
	null
)(NavBar);

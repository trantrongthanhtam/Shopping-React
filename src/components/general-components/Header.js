import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/general.module.css";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div>
					<Link to="/" className={styles.logo}>
						honganstore
					</Link>
				</div>
				{}
				<div className={styles.menuBurger}>
					<i className="fas fa-bars" />
				</div>
				<ul className={styles.productMenu}>
					<li className={styles.sub}>
						<Link to="/category">Áo</Link>
						{}
						<ul className={styles.subAo}>
							<li className={styles.sub}>
								<Link to="/category">Áo thun</Link>
								{}
								<ul className={styles.subAoHoodie}>
									<li>
										<Link to="/category">Áo sọc trắng</Link>
									</li>
									<li>
										<Link to="/category">Áo sọc đen</Link>
									</li>
									<li>
										<Link to="/category">Áo cam</Link>
									</li>
								</ul>
							</li>
							<li className={styles.sub}>
								<Link to="/category">Áo ba lỗ</Link>
								<ul className={styles.subAoHoodie}>
									<li>
										<Link to="/category">Áo sọc trắng</Link>
									</li>
									<li>
										<Link to="/category">Áo sọc đen</Link>
									</li>
									<li>
										<Link to="/category">Áo cam</Link>
									</li>
								</ul>
							</li>
							<li className={styles.sub}>
								<Link to="/category">Áo hoodie</Link>
								<ul className={styles.subAoHoodie}>
									<li>
										<Link to="/category">Áo sọc trắng</Link>
									</li>
									<li>
										<Link to="/category">Áo sọc đen</Link>
									</li>
									<li>
										<Link to="/category">Áo cam</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>
					<li>
						<Link to="/category">Váy</Link>
					</li>
					<li>
						<Link to="/category">shorts</Link>
					</li>
					<li>
						<Link to="/category">Quần jean</Link>
					</li>
					<li>
						<Link to="/category">Đầm</Link>
					</li>
					<li>
						<Link to="/category">Jumpsuit</Link>
					</li>
				</ul>
			</header>
		);
	}
}

export default Header;

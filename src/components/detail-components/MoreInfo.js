import React from "react";
import MoreInfoTab1 from "./MoreInfoTab1";
import MoreInfoTab2 from "./MoreInfoTab2";
import MoreInfoTab3 from "./MoreInfoTab3";
import MoreInfoTab4 from "./MoreInfoTab4";
import MoreInfoTab5 from "./MoreInfoTab5";
import styles from "../../css/detail.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class MoreInfo extends React.Component {
	render() {
		return (
			<div className={cx("container", styles.moreinfo)}>
				<ul
					className={cx("nav", "nav-tabs", styles.navTabs)}
					role="tablist"
				>
					<li className="nav-item">
						<a
							className={cx("nav-link", styles.navLink, "active")}
							data-toggle="tab"
							href="#chitiet"
						>
							CHI TIẾT
						</a>
					</li>
					<li className="nav-item">
						<a
							className={cx("nav-link", styles.navLink)}
							data-toggle="tab"
							href="#chitietkichco"
						>
							CHI TIẾT KÍCH CỠ
						</a>
					</li>
					<li className="nav-item">
						<a
							className={cx("nav-link", styles.navLink)}
							data-toggle="tab"
							href="#nhanxet"
						>
							NHẬN XÉT
						</a>
					</li>
					<li className="nav-item">
						<a
							className={cx("nav-link", styles.navLink)}
							data-toggle="tab"
							href="#chinhsachhoantra"
						>
							CHÍNH SÁCH HOÀN TRẢ
						</a>
					</li>
					<li className="nav-item">
						<a
							className={cx("nav-link", styles.navLink)}
							data-toggle="tab"
							href="#footerthongtinvanchuyen"
						>
							THÔNG TIN VẬN CHUYỂN
						</a>
					</li>
				</ul>
				<div className={cx("tab-content", styles.tabContent)}>
					<MoreInfoTab1></MoreInfoTab1>
					<MoreInfoTab2></MoreInfoTab2>
					<MoreInfoTab3></MoreInfoTab3>
					<MoreInfoTab4></MoreInfoTab4>
					<MoreInfoTab5></MoreInfoTab5>
				</div>
			</div>
		);
	}
}

export default MoreInfo;

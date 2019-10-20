import React from "react";
import styles from "../../css/category.module.css";
import classNames from "classnames";
import { fetchProducts } from "../../actions/products-actions";
import { colorFilter } from "../../actions/filter-actions";
import { connect } from "react-redux";

const cx = classNames.bind(styles);

class ColorCategory extends React.Component {
	state = {
		cssUpdate: ["fa-angle-right", "collapse"],
		color: "all"
	};

	handleExpandMenu = () => {
		let update =
			this.state.cssUpdate[0] === "fa-angle-right"
				? ["fa-angle-down", ""]
				: ["fa-angle-right", "collapse"];
		this.setState({ cssUpdate: update });
	};

	handleOrange = () => {
		this.setState({ color: "cam" });
	};
	handleBlue = () => {
		this.setState({ color: "xanh dương" });
	};
	handleMultiColor = () => {
		this.setState({ color: "nhiều màu" });
	};
	handleBrown = () => {
		this.setState({ color: "nâu" });
	};
	handleWhite = () => {
		this.setState({ color: "trắng" });
	};
	handleBlack = () => {
		this.setState({ color: "đen" });
	};
	componentDidUpdate(prevProps, prevState) {
		this.props.colorFilter(this.state.color);
	}

	render() {
		const { cssUpdate } = this.state;
		return (
			<li className="col-sm-4 col-md-12">
				<div
					className={styles.topMenu}
					data-toggle="collapse"
					data-target="#no5"
					onClick={this.handleExpandMenu}
				>
					<div>MÀU SẮC</div>
					<div>
						<i className={`fas ${cssUpdate[0]}`} />
					</div>
				</div>
				<ul className={cx(styles.subMenu, cssUpdate[1])} id="no5">
					<li>
						<a href="#orange" onClick={this.handleOrange}>
							Cam
						</a>
					</li>
					<li>
						<a onClick={this.handleBlue} href="#blue">
							Xanh dương
						</a>
					</li>
					<li>
						<a onClick={this.handleMultiColor} href="#multi-color">
							Nhiều màu
						</a>
					</li>
					<li>
						<a onClick={this.handleBrown} href="#brown">
							Nâu
						</a>
					</li>
					<li>
						<a onClick={this.handleWhite} href="#white">
							Trắng
						</a>
					</li>
					<li>
						<a onClick={this.handleBlack} href="#black">
							Đen
						</a>
					</li>
				</ul>
			</li>
		);
	}
}

const mapDispatchToProps = { fetchProducts, colorFilter };
export default connect(
	null,
	mapDispatchToProps
)(ColorCategory);

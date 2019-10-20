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

	handleColor = e => {
		const target = e.target.dataset.color;
		this.setState({ color: target });
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
						<a
							data-color="cam"
							href="#orange"
							onClick={this.handleColor}
						>
							Cam
						</a>
					</li>
					<li>
						<a
							data-color="xanh dương"
							onClick={this.handleColor}
							href="#blue"
						>
							Xanh dương
						</a>
					</li>
					<li>
						<a
							data-color="nhiều màu"
							onClick={this.handleColor}
							href="#multi-color"
						>
							Nhiều màu
						</a>
					</li>
					<li>
						<a
							data-color="nâu"
							onClick={this.handleColor}
							href="#brown"
						>
							Nâu
						</a>
					</li>
					<li>
						<a
							data-color="trắng"
							onClick={this.handleColor}
							href="#white"
						>
							Trắng
						</a>
					</li>
					<li>
						<a
							data-color="đen"
							onClick={this.handleColor}
							href="#black"
						>
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

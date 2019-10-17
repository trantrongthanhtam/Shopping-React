import React from "react";
import BannerCategory1 from "./BannerCategory1";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class CarouselItem extends React.Component {
	constructor(prop, id) {
		super(prop);
		this.id = id;
	}
	activate = (id, active) => {
		if (id === active) return "active";
	};

	render() {
		return (
			<div
				className={cx(
					"carousel-item",
					styles.carouselItem,
					this.activate(this.props.id, this.props.activeSlide)
				)}
			>
				<BannerCategory1 id={this.props.id}></BannerCategory1>
				{/* <BannerCategory2 id={this.props.id}></BannerCategory2>
				<BannerCategory3 id={this.props.id}></BannerCategory3> */}
			</div>
		);
	}
}

export default CarouselItem;

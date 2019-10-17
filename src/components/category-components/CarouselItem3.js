import React from "react";
import BannerCategory3 from "./BannerCategory3";
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
				<BannerCategory3 id={this.props.id}></BannerCategory3>
			</div>
		);
	}
}

export default CarouselItem;

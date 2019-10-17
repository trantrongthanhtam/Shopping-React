import React from "react";
import BannerCategory2 from "./BannerCategory2";
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
				<BannerCategory2 id={this.props.id}></BannerCategory2>
			</div>
		);
	}
}

export default CarouselItem;

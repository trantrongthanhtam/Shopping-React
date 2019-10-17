import React from "react";
import BannerHome from "./BannerHome";
import classNames from "classnames";
import styles from "../../css/index.module.css";

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
				<BannerHome id={this.props.id}></BannerHome>
			</div>
		);
	}
}

export default CarouselItem;

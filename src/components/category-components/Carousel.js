import React from "react";
import CarouselInner from "./CarouselInner";
import ControlContainer from "./ControlContainer";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class Carousel extends React.Component {
	state = {
		activeSlide: 0
	};

	controlFeedback = activeS => {
		this.setState({ activeSlide: parseInt(activeS) });
	};
	render() {
		console.log(this.state.activeSlide);

		return (
			<div
				id="demo"
				className={cx("carousel", styles.carousel, "slide")}
				style={{
					marginBottom: "30px"
				}}
				data-ride="carousel"
			>
				<CarouselInner activeSlide={this.state.activeSlide} />
				<ControlContainer feedBack={this.controlFeedback} />
			</div>
		);
	}
}

export default Carousel;

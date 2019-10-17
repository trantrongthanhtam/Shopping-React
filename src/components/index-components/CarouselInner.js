import React from "react";
import CarouselItem from "./CarouselItem";

class CarouselInner extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="carousel-inner">
				<CarouselItem id={0} activeSlide={this.props.activeSlide} />
				<CarouselItem id={1} activeSlide={this.props.activeSlide} />
				<CarouselItem id={2} activeSlide={this.props.activeSlide} />
			</div>
		);
	}
}

export default CarouselInner;

import React from "react";
import CarouselItem1 from "./CarouselItem1";
import CarouselItem2 from "./CarouselItem2";
import CarouselItem3 from "./CarouselItem3";

class CarouselInner extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		return (
			<div className="carousel-inner">
				<CarouselItem1 id={0} activeSlide={this.props.activeSlide} />
				<CarouselItem2 id={1} activeSlide={this.props.activeSlide} />
				<CarouselItem3 id={2} activeSlide={this.props.activeSlide} />
			</div>
		);
	}
}

export default CarouselInner;

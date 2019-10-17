import Carousel from "../components/index-components/Carousel";
import DealHot from "../components/index-components/DealHot";
import StyleRecommend from "../components/index-components/StyleRecommend";
import ShortTalk1 from "../components/index-components/ShortTalk1";
import ShortTalk2 from "../components/index-components/ShortTalk2";
import "../css/bootstrap.css";
import React, { Component } from "react";

export default class Index extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<React.Fragment>
				<Carousel />
				<DealHot />
				<StyleRecommend />
				<ShortTalk1 />
				<ShortTalk2 />
			</React.Fragment>
		);
	}
}

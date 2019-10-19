import Preloader from "../components/category-components/Preloader";
import Carousel from "../components/category-components/Carousel";
import MenuCategory from "../components/category-components/MenuCategory";
import ShortTalk3 from "../components/category-components/ShortTalk3";
import ShortTalk4 from "../components/category-components/ShortTalk4";
import React, { Component } from "react";
import "../css/bootstrap.css";

export default class Category extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<React.Fragment>
				<Preloader />
				<Carousel />
				<MenuCategory />
				<ShortTalk3 />
				<ShortTalk4 />
			</React.Fragment>
		);
	}
}

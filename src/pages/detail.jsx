import Preloader from "../components/category-components/Preloader";
import ProductDetail from "../components/detail-components/ProductDetail";
import MoreInfo from "../components/detail-components/MoreInfo";
import SimilarProducts from "../components/detail-components/SimilarProducts";
import React, { Component } from "react";
import "../css/bootstrap.css";

export default class Detail extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { id } = this.props.match.params;

		return (
			<React.Fragment>
				<Preloader />
				<ProductDetail url={id} />
				<MoreInfo url={id} />
				<SimilarProducts />
			</React.Fragment>
		);
	}
}

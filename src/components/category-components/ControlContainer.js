import React from "react";
import PropTypes from "prop-types";
import styles from "../../css/category.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class ControlContainer extends React.Component {
	static propTypes = {
		feedBack: PropTypes.func.isRequired
	};
	constructor(props) {
		super(props);
		this.state = {
			activeSlide: 0
		};
		this.feedback = 0;
	}

	handlePrev = () => {
		this.feedback = this.state.activeSlide;
		if (this.feedback - 1 < 0) this.feedback = 3;
		this.props.feedBack(this.feedback - 1);
		this.setState({
			activeSlide: this.feedback - 1
		});
	};
	handleNext = () => {
		this.feedback = this.state.activeSlide;
		if (this.feedback + 1 > 2) this.feedback = -1;
		this.props.feedBack(this.feedback + 1);
		this.setState({
			activeSlide: this.feedback + 1
		});
	};

	render() {
		return (
			<div className={cx("control-container", styles.controlContainer)}>
				<a
					className="carousel-control-prev"
					href="#footer"
					onClick={this.handlePrev}
				>
					<i className="fas fa-chevron-left" />
				</a>
				<a
					className="carousel-control-next"
					href="#footer"
					onClick={this.handleNext}
				>
					<i className="fas fa-chevron-right" />
				</a>
			</div>
		);
	}
}

export default ControlContainer;

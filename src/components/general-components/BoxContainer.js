import React from "react";
import Box1 from "./Box1";
import Box2 from "./Box2";
import Box3 from "./Box3";
import styles from "../../css/general.module.css";
import classNames from "classnames";

const cx = classNames.bind(styles);

class BoxContainer extends React.Component {
	render() {
		return (
			<div className={cx(styles.flexContainer, styles.row)}>
				<Box1></Box1>
				<Box2></Box2>
				<Box3></Box3>
			</div>
		);
	}
}

export default BoxContainer;

import React from "react";
import styles from "../../css/category.module.css";

class AdCategory extends React.Component {
	render() {
		return (
			<div className={styles.adContainer}>
				<img src="img/ad.png" alt="ad" />
				<div className={styles.adText}>
					<div className={styles.subAdtext}>
						<p>
							MUA <span>2</span>
						</p>
					</div>
					<div className={styles.subAdtext}>
						<p>
							GIẢM <span>10%</span>
						</p>
					</div>
					<div className={styles.line2} />
					<div className={styles.subAdtext}>
						<p>
							MUA <span>3</span>
						</p>
					</div>
					<div className={styles.subAdtext}>
						<p>
							GIẢM <span>18%</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AdCategory;

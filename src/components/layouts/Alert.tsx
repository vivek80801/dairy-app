import React from "react";
import alert from "../../scss/components/layouts/alert.module.scss";
import Prototypes from "prop-types";

const Alert: React.FC<{ message: string; cls: string }> = ({
	message,
	cls,
}): JSX.Element => {
	return (
		<>
			{message !== "" ? (
				<div className={alert.alert}>
					<span className={cls}>{message}</span>
				</div>
			) : null}
		</>
	);
};

Alert.propTypes = {
	message: Prototypes.string.isRequired,
	cls: Prototypes.string.isRequired,
};

export default Alert;

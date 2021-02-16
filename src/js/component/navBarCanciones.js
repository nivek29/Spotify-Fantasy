import React from "react";
import PropTypes from "prop-types";

const NavBarCanciones = props => {
	return (
		<div className="col-12">
			<div className="col-12 d-flex justify-content-center">
				<button
					className="btn btn-secondary"
					id="backward"
					onClick={props.forwardBackward}>
					<i className="fas fa-backward" id="backward"></i>
				</button>

				<button className="btn btn-secondary" onClick={props.pause}>
					<i className="fas fa-pause"></i>
				</button>

				<button className="btn btn-secondary">
					<i className="fas fa-play"></i>
				</button>

				<button
					className="btn btn-secondary"
					id="forward"
					onClick={props.forwardBackward}>
					<i className="fas fa-forward" id="forward"></i>
				</button>
			</div>
		</div>
	);
};
NavBarCanciones.propTypes = {
	forwardBackward: PropTypes.func,
	pause: PropTypes.func
};
export default NavBarCanciones;

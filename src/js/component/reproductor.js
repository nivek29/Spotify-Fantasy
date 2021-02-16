import React from "react";
import PropTypes from "prop-types";

const Reproductor = props => {
	/*console.log(props.canciones);*/

	console.log(props.mp3);
	return (
		<div className="col-12">
			<audio
				id="musiquita"
				autoPlay
				src={
					"https://assets.breatheco.de/apis/sound/" + props.mp3
				}></audio>
		</div>
	);
};

Reproductor.propTypes = {
	mp3: PropTypes.string
};

export default Reproductor;

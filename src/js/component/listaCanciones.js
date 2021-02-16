import React from "react";
import PropTypes from "prop-types";

const ListaCanciones = props => {
	/*console.log(props.canciones);*/

	return (
		<div className="col-12">
			{props.canciones.map((song, i) => {
				return (
					<div
						className="cancion col-12 text-center"
						id={i}
						key={i}
						onClick={props.metodo}>
						{song.name}
					</div>
				);
			})}
		</div>
	);
};

ListaCanciones.propTypes = {
	canciones: PropTypes.array,
	metodo: PropTypes.func
};

export default ListaCanciones;

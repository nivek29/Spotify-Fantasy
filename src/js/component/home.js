import React from "react";

import ListaCanciones from "../component/listaCanciones.js";
import NavBarCanciones from "../component/navBarCanciones.js";
import Reproductor from "../component/reproductor.js";

export class Home extends React.Component {
	constructor() {
		super();

		this.state = {
			fetchData: [],
			mp3: "",
			posicionCancion: 0
		};
		this.reproductor = null;
	}
	pause(event) {
		this.reproductor.pause();
	}
	forwardBackward(event) {
		if (
			event.target.id === "forward" &&
			this.state.posicionCancion < 22 &&
			this.state.posicionCancion >= 0
		) {
			this.reproductor.src =
				"https://assets.breatheco.de/apis/sound/" + this.state.mp3;

			this.setState({ posicionCancion: this.state.posicionCancion + 1 });
			this.setState({
				mp3: this.state.fetchData[this.state.posicionCancion].url
			});
			/*this.reproductor.src =
				"https://assets.breatheco.de/apis/sound/" + this.state.mp3;*/

			console.log();
			console.log("adelante");
		}

		if (
			event.target.id === "backward" &&
			this.state.posicionCancion >= 0 &&
			this.state.posicionCancion < 22
		) {
			this.reproductor.src =
				"https://assets.breatheco.de/apis/sound/" + this.state.mp3;
			this.setState({ posicionCancion: this.state.posicionCancion - 1 });
			this.setState({
				mp3: this.state.fetchData[this.state.posicionCancion].url
			});
			console.log(this.state.posicionCancion);
			console.log("atras");
		}
	}

	reproducirCancion(event) {
		this.reproductor.src = "https://assets.breatheco.de/apis/sound/";
		this.setState({
			posicionCancion: parseInt(event.target.id)
		});
		this.setState({
			mp3: this.state.fetchData[this.state.posicionCancion].url
		});
		this.reproductor.src =
			"https://assets.breatheco.de/apis/sound/" + this.state.mp3;
	}

	componentDidMount() {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(response => response.json())
			.then(data => {
				this.setState({ fetchData: data });
				console.log(this.state.fetchData);
			});
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<ListaCanciones
						canciones={this.state.fetchData}
						metodo={this.reproducirCancion.bind(this)}
					/>
				</div>
				<div className="row">
					<audio
						id="musiquita"
						autoPlay
						ref={t => (this.reproductor = t)}></audio>
				</div>
				<div className="row">
					<NavBarCanciones
						forwardBackward={this.forwardBackward.bind(this)}
						pause={this.pause.bind(this)}
					/>
				</div>
			</div>
		);
	}
}
export default Home;

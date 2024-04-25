import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Vehicles } from "../component/vehicles";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="text-center mt-5">
		<div className="characters-carousel">
			<Characters />
		</div>
		<div className="planets-carousel">
			<Planets />
		</div>
		<div className="vehicles-carousel">
			<Vehicles />
		</div>
	</div>
);

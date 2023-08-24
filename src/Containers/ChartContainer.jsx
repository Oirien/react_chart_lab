import React, { useState, useEffect } from "react";
import Top20List from "../Components/Top20List";
import Top20RockList from "../Components/Top20RockList";
import Top20DanceList from "../Components/Top20DanceList";
import Top20CountryList from "../Components/Top20CountryList";

const ChartContainer = () => {
	const [genre, setGenre] = useState("");

	return (
		<>
			<div className="button__wrapper">
				{genre == "Rock" ? null : (
					<button
						onClick={() => {
							setGenre("Rock");
						}}
					>
						See Rock Top20
					</button>
				)}

				{genre == "Country" ? null : (
					<button
						onClick={() => {
							setGenre("Country");
						}}
					>
						See Country Top20
					</button>
				)}
				{genre == "Dance" ? null : (
					<button
						onClick={() => {
							setGenre("Dance");
						}}
					>
						See Dance Top20
					</button>
				)}
				{genre == "" ? null : (
					<button
						onClick={() => {
							setGenre("");
						}}
					>
						See Overall Top20
					</button>
				)}
			</div>

			{genre == "" ? (
				<Top20List />
			) : genre == "Rock" ? (
				<Top20RockList />
			) : genre == "Dance" ? (
				<Top20DanceList />
			) : (
				<Top20CountryList />
			)}
		</>
	);
};

export default ChartContainer;

import React, { useState, useEffect } from "react";
import Song from "./Song";

const Top20RockList = () => {
	const [topRock20, setTopRock20] = useState([]);

	useEffect(() => {
		fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json")
			.then((res) => res.json())
			.then((data) => {
				setTopRock20(data.feed.entry);
			});
	}, []);

	return (
		<>
			<h1>UK iTunes Rock Top 20</h1>
			<ul className="entryList">
				{topRock20.map((song, i) => (
					<Song song={song} key={i} i={i} />
				))}
			</ul>
		</>
	);
};

export default Top20RockList;

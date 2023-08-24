import React, { useState, useEffect } from "react";
import Song from "./Song";

const Top20CountryList = () => {
	const [topCountry20, setTopCountry20] = useState([]);

	useEffect(() => {
		fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json")
			.then((res) => res.json())
			.then((data) => {
				setTopCountry20(data.feed.entry);
			});
	}, []);

	return (
		<>
			<h1>UK iTunes Country Top 20</h1>
			<ul className="entryList">
				{topCountry20.map((song, i) => (
					<Song song={song} key={i} i={i} />
				))}
			</ul>
		</>
	);
};

export default Top20CountryList;

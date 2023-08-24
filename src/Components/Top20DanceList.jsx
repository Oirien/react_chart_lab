import React, { useState, useEffect } from "react";
import Song from "./Song";

const Top20DanceList = () => {
	const [topDance20, setTopDance20] = useState([]);

	useEffect(() => {
		fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json")
			.then((res) => res.json())
			.then((data) => {
				setTopDance20(data.feed.entry);
			});
	}, []);

	return (
		<>
			<h1>UK iTunes Dance Top 20</h1>
			<ul className="entryList">
				{topDance20.map((song, i) => (
					<Song song={song} key={i} i={i} />
				))}
			</ul>
		</>
	);
};

export default Top20DanceList;

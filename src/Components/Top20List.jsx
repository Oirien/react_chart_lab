import React, { useEffect, useState } from "react";
import Song from "./Song";

const Top20List = () => {
	const [top20, setTop20] = useState([]);

	useEffect(() => {
		fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
			.then((res) => res.json())
			.then((data) => {
				setTop20(data.feed.entry);
			});
	}, []);

	return (
		<>
			<h1>UK iTunes Top 20</h1>
			<ul className="entryList">
				{top20.map((song, i) => (
					<Song song={song} key={i} i={i} />
				))}
			</ul>
		</>
	);
};

export default Top20List;

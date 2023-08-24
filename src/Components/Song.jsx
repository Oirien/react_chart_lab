import React from "react";

const Song = ({ song, i }) => {
	return (
		<>
			<li className="entryItem">
				<img src={song["im:image"][2].label} height={105} width={105} />
				<div>
					<h5>Entry Number {i + 1} </h5>
					<p className="entryItem__paragraph">
						<span className="songname">{song["im:name"].label}</span> by {song["im:artist"].label}
					</p>
				</div>
				<audio className="audio__control" controls src={song.link[1].attributes.href}></audio>
			</li>
		</>
	);
};

export default Song;

import React, { useState, useEffect } from "react";

const Top20CountryList = () => {
    const [topCountry20, setTopCountry20] = useState([]);

    useEffect(() => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json")
            .then(res => res.json())
            .then(data => {
                setTopCountry20(data.feed.entry);
            });
    }, []);

    return (
        <>
            <h1>UK iTunes Country Top 20</h1>
            <ul>
                {topCountry20.map((song, i) => (
                    <>
                        <li key={i} className="entryItem">
                            <img
                                src={song["im:image"][2].label}
                                height={105}
                                width={105}
                            />
                            <div>
                                <h5>Entry Number {i + 1} </h5>
                                <p className="entryItem__paragraph">
                                    <span className="songname">
                                        {song["im:name"].label}
                                    </span>{" "}
                                    by {song["im:artist"].label}
                                </p>
                            </div>
                        </li>
                    </>
                ))}
            </ul>
        </>
    );
};

export default Top20CountryList;

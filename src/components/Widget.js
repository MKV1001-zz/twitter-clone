import React from "react";
import "./Widget.css";
import SearchIcon from "@mui/icons-material/Search";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";

function Widget() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="search twitter" type="text"></input>
      </div>
      <div className="widgets__widgetContainer">
        <h2>Whats Happening</h2>
        <TwitterTweetEmbed tweetId="933354946111705097" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
      </div>
    </div>
  );
}

export default Widget;

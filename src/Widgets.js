import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@material-ui/icons/Search';

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer" >
                <h2>What's happening </h2>

                <TwitterTweetEmbed tweetId={"1365148510329344005"} />

                <TwitterTimelineEmbed   
                    sourceType="profile"
                    screenName="Harikrushn9"
                    options={ { height: 400  } }
                />

                <TwitterShareButton
                    url={"https://github.com/harikanani"}
                    options={{ text: "#reactjs is awesome", via: "Harikrushn9" }}
                />
            </div>
        </div>
    )
}

export default Widget;

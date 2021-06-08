import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: 'harry',
            username: 'harikanani',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars.githubusercontent.com/u/54361799?s=60&v=",
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars.githubusercontent.com/u/54361799?s=60&v=4" />
                    <input 
                    onChange={e => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?" 
                    type="text" />
                </div>
                    <input 
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                    type="text" />
                <Button 
                type="submit"
                onClick={sendTweet}
                className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox

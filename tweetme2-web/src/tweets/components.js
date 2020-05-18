import React, { useEffect, useState } from "react";
import { loadTweets } from "../lookup";

export function TweetsComponent(props) {
  const textAreaRef = React.createRef(); //through reference we can access the referenced field
  const [newTweets, setNewTweets] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVal = textAreaRef.current.value;
    console.log(newVal)
    let tempNewTweets = [...newTweets] //copying the newTweets state declared earlier
    tempNewTweets.unshift({//unshift moves the element to add in the stating whereas push put it in the end
      content: newVal,
      like: 0,
      id: 1234
    })
    setNewTweets(tempNewTweets)
    textAreaRef.current.value = "";
  };

  return (
    <div className={props.className}>
      <div className="col-12 mb-3">
        <form onSubmit={handleSubmit}>
          <textarea
            ref={textAreaRef}
            className="form-control"
            required={true}
            name="tweet"
          ></textarea>
          <button type="submit" className="btn btn-primary my-3">
            Tweet
          </button>
        </form>
      </div>
      <TweetsList newTweets={newTweets}/>
    </div>
  );
}

export function TweetsList(props) {
  const [tweetsInit, setTweetsInit] = useState([]);
  const [tweets, setTweets] = useState([])
  // setTweetsInit([...props.newTweets].concat(tweetsInit))
  useEffect(()=>{
    const final = [...props.newTweets].concat(tweetsInit)
    if (final.length !== tweets.length){
      setTweets(final)
    }
  }, [props.newTweets, tweets, tweetsInit])

  useEffect(() => {
    const myCallback = (response, status) => {
      if (status === 200) {
        setTweetsInit(response);
      } else {
        alert("There was an error")
      }
    };
    loadTweets(myCallback);
  }, [tweetsInit]);

  return tweets.map((item, index) => {
    return (
      <Tweet
        tweet={item}
        className="my-5 py-5 border bg-white text-dark"
        key={`${index}-{item.id}`}
      />
    );
  });
}

export function ActionBtn(props) {
  const { tweet, action } = props;
  const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);
  const [userLike, setUserLike] = useState(
    tweet.userLike === true ? true : false
  );
  const className = props.className ? props.className : "btn btn-primary";
  const actionDisplay = action.display ? action.display : "Action";
  const handleClick = (event) => {
    event.preventDefault();
    if (action.type === "like") {
      if (userLike === true) {
        //unklike it
        setLikes(likes - 1);
        setUserLike(false);
      } else {
        setLikes(likes + 1);
        setUserLike(true);
      }
    }
  };
  const display =
    action.type === "like" ? `${likes} ${actionDisplay}` : actionDisplay;

  return (
    <button className={className} onClick={handleClick}>
      {" "}
      {display}{" "}
    </button>
  );
}

export function Tweet(props) {
  const { tweet } = props;
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";
  return (
    <div className={className}>
      <p>
        {tweet.id} - {tweet.content}
      </p>
      <div className="btn btn-group">
        <ActionBtn tweet={tweet} action={{ type: "like", display: "like" }} />
        <ActionBtn
          tweet={tweet}
          action={{ type: "unlike", display: "unlike" }}
        />
        <ActionBtn
          tweet={tweet}
          action={{ type: "retweet", display: "retweet" }}
        />
      </div>
    </div>
  );
}
